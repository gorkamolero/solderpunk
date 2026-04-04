"""Detect individual knobs and buttons on the Tempest panel image.
Outputs positions as percentages of image dimensions.
Saves annotated debug image and JSON results."""

import cv2
import numpy as np
import json
import os

# Paths
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_PATH = os.path.join(BASE, "web", "public", "tempest-panel.png")
OUT_IMG = os.path.join(BASE, "docs", "tempest-knobs-detected.png")
OUT_JSON = os.path.join(BASE, "docs", "individual-controls.json")

img = cv2.imread(IMG_PATH)
h, w = img.shape[:2]
print(f"Image: {w}x{h}")

gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
out = img.copy()

# ============================================================
# 1. KNOB DETECTION (HoughCircles)
# ============================================================
# The Tempest panel has knobs at specific Y bands.
# We use multiple passes with different parameters to catch
# both small and larger knobs.

blurred = cv2.GaussianBlur(gray, (9, 9), 2)

# Pass 1: Small knobs (majority) - radius ~12-22px at 2000px width
circles_small = cv2.HoughCircles(
    blurred, cv2.HOUGH_GRADIENT,
    dp=1.2, minDist=40,
    param1=80, param2=35,
    minRadius=10, maxRadius=25
)

# Pass 2: Medium knobs (some modulation knobs are slightly larger)
circles_med = cv2.HoughCircles(
    blurred, cv2.HOUGH_GRADIENT,
    dp=1.2, minDist=50,
    param1=80, param2=40,
    minRadius=25, maxRadius=45
)

# Merge all circles, deduplicating
all_circles = []
if circles_small is not None:
    all_circles.extend(circles_small[0].tolist())
if circles_med is not None:
    all_circles.extend(circles_med[0].tolist())

# Deduplicate: merge circles whose centers are within 20px
def dedup_circles(circles, min_dist=20):
    if not circles:
        return []
    circles = sorted(circles, key=lambda c: c[2], reverse=True)  # larger radius first
    kept = []
    for c in circles:
        cx, cy, r = c
        duplicate = False
        for k in kept:
            dist = np.sqrt((cx - k[0])**2 + (cy - k[1])**2)
            if dist < min_dist:
                duplicate = True
                break
        if not duplicate:
            kept.append(c)
    return kept

all_circles = dedup_circles(all_circles, min_dist=25)

# Known Y-band filtering for Tempest knobs (based on prior analysis):
# - Master row: Y ~20-23% (knobs near display)
# - Row 1 (synthesis): Y ~28-33%
# - Row 2 (modulation): Y ~38-42%
# - Scattered: Y ~35-55% (volume knob, etc.)
# X range: roughly 15-90% (panel area, excluding wood sides)

knob_y_bands = [
    (18, 25),   # Master/display area
    (27, 34),   # Synthesis row
    (35, 43),   # Modulation row
    (43, 56),   # Lower scattered knobs
]

def in_knob_region(cy_pct, cx_pct):
    """Check if a detected circle is in a plausible knob region."""
    if cx_pct < 12 or cx_pct > 92:
        return False  # wood sides
    for ymin, ymax in knob_y_bands:
        if ymin <= cy_pct <= ymax:
            return True
    return False

knobs_raw = []
for (cx, cy, r) in all_circles:
    cx_pct = cx / w * 100
    cy_pct = cy / h * 100
    r_pct = r / w * 100
    if in_knob_region(cy_pct, cx_pct):
        # Filter out unreasonably tiny or huge
        if 0.4 <= r_pct <= 3.0:
            knobs_raw.append({
                "cx": float(cx), "cy": float(cy), "r": float(r),
                "cx_pct": round(cx_pct, 1),
                "cy_pct": round(cy_pct, 1),
                "r_pct": round(r_pct, 1),
            })

# Sort top-to-bottom, left-to-right
knobs_raw.sort(key=lambda k: (k["cy_pct"], k["cx_pct"]))

# Assign IDs and compute bounding box percentages
knobs = []
for i, k in enumerate(knobs_raw):
    r_h_pct = k["r"] / h * 100  # radius as % of height for height calc
    knobs.append({
        "id": f"knob-{i+1}",
        "cx_pct": k["cx_pct"],
        "cy_pct": k["cy_pct"],
        "r_pct": k["r_pct"],
        "left_pct": round(k["cx_pct"] - k["r_pct"], 1),
        "top_pct": round(k["cy_pct"] - r_h_pct, 1),
        "width_pct": round(k["r_pct"] * 2, 1),
        "height_pct": round(r_h_pct * 2, 1),
    })

print(f"\nDetected {len(knobs)} knobs")
for k in knobs:
    print(f"  {k['id']}: center=({k['cx_pct']}%, {k['cy_pct']}%) r={k['r_pct']}%")

# ============================================================
# 2. BUTTON DETECTION
# ============================================================
# Buttons on the Tempest are small rectangular elements.
# Strategy: use adaptive thresholding + contour detection
# focused on the button regions of the panel.

# Button regions (Y bands):
# - Button strip between synth rows and pads: Y ~44-58%
# - Envelope select / toggle buttons: Y ~28-42%
# - Top row tiny buttons: Y ~17-20%
# - Transport/mode buttons: Y ~53-58%

# We'll use multiple approaches:

# Approach A: Threshold for bright small rectangles
# Many buttons appear as small light-colored elements on dark background

# Convert to different color spaces for better detection
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
lab = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)
l_channel = lab[:, :, 0]

# Adaptive threshold on lightness
thresh_adapt = cv2.adaptiveThreshold(
    l_channel, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
    cv2.THRESH_BINARY, 15, -5
)

# Also try Otsu on specific regions
# Crop to button strip area (Y: 44-58%)
y_start_btn = int(0.44 * h)
y_end_btn = int(0.58 * h)
x_start = int(0.13 * w)
x_end = int(0.88 * w)

# Full panel area for all button detection
gray_panel = gray[int(0.15*h):int(0.60*h), int(0.13*w):int(0.88*w)]

# Edge detection on the full panel
edges = cv2.Canny(gray, 60, 150)
kernel = np.ones((2, 2), np.uint8)
edges_dilated = cv2.dilate(edges, kernel, iterations=1)

contours, _ = cv2.findContours(edges_dilated, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Also detect via threshold
_, thresh_bright = cv2.threshold(l_channel, 160, 255, cv2.THRESH_BINARY)
# Clean up
kernel_btn = np.ones((3, 3), np.uint8)
thresh_bright = cv2.morphologyEx(thresh_bright, cv2.MORPH_OPEN, kernel_btn)
thresh_bright = cv2.morphologyEx(thresh_bright, cv2.MORPH_CLOSE, kernel_btn)

contours_bright, _ = cv2.findContours(thresh_bright, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Combine contours
all_contours = list(contours) + list(contours_bright)

# Filter for button-like shapes
button_candidates = []

# Button size range (in pixels at 2000x1332)
MIN_BTN_AREA = 150
MAX_BTN_AREA = 4000
MIN_BTN_SIDE = 8
MAX_BTN_SIDE = 80

def is_button_region(cy_pct, cx_pct):
    """Check if position is in a plausible button region."""
    if cx_pct < 12 or cx_pct > 92:
        return False
    # Multiple button zones on the Tempest
    button_zones = [
        (15, 20),   # Top row small buttons (above synth section)
        (25, 35),   # Within synth rows (select buttons)
        (35, 45),   # Between rows (toggle/select buttons)
        (43, 58),   # Main button strip
    ]
    for ymin, ymax in button_zones:
        if ymin <= cy_pct <= ymax:
            return True
    return False

for cnt in all_contours:
    area = cv2.contourArea(cnt)
    if area < MIN_BTN_AREA or area > MAX_BTN_AREA:
        continue

    x, y, bw, bh = cv2.boundingRect(cnt)

    # Size filtering
    if bw < MIN_BTN_SIDE or bh < MIN_BTN_SIDE:
        continue
    if bw > MAX_BTN_SIDE or bh > MAX_BTN_SIDE:
        continue

    # Aspect ratio: buttons are roughly square or slightly rectangular
    aspect = bw / bh if bh > 0 else 0
    if aspect < 0.3 or aspect > 3.5:
        continue

    # Rectangularity: how well does the contour fill its bounding box?
    rect_fill = area / (bw * bh) if (bw * bh) > 0 else 0
    if rect_fill < 0.4:
        continue

    cx_pct = (x + bw/2) / w * 100
    cy_pct = (y + bh/2) / h * 100

    if not is_button_region(cy_pct, cx_pct):
        continue

    # Don't overlap with detected knobs
    overlaps_knob = False
    for k in knobs:
        dist = np.sqrt((cx_pct - k["cx_pct"])**2 + ((cy_pct - k["cy_pct"]) * w/h)**2)
        if dist < k["r_pct"] * 2:
            overlaps_knob = True
            break
    if overlaps_knob:
        continue

    button_candidates.append({
        "x": int(x), "y": int(y), "w": int(bw), "h": int(bh),
        "area": int(area),
        "cx_pct": round(cx_pct, 1),
        "cy_pct": round(cy_pct, 1),
        "left_pct": round(x / w * 100, 1),
        "top_pct": round(y / h * 100, 1),
        "width_pct": round(bw / w * 100, 1),
        "height_pct": round(bh / h * 100, 1),
    })

# Deduplicate buttons (merge overlapping)
def dedup_buttons(buttons, overlap_thresh=15):
    if not buttons:
        return []
    buttons = sorted(buttons, key=lambda b: b["area"], reverse=True)
    kept = []
    for b in buttons:
        duplicate = False
        bcx = b["cx_pct"]
        bcy = b["cy_pct"]
        for k in kept:
            dist = np.sqrt((bcx - k["cx_pct"])**2 + (bcy - k["cy_pct"])**2)
            if dist < overlap_thresh / w * 100 * 10:  # rough pixel distance in pct
                # More precise: check if centers are close
                dx = abs(bcx - k["cx_pct"]) * w / 100
                dy = abs(bcy - k["cy_pct"]) * h / 100
                if dx < 15 and dy < 15:
                    duplicate = True
                    break
        if not duplicate:
            kept.append(b)
    return kept

button_candidates = dedup_buttons(button_candidates)

# Sort by position
button_candidates.sort(key=lambda b: (b["cy_pct"], b["cx_pct"]))

# Assign IDs
buttons = []
for i, b in enumerate(button_candidates):
    buttons.append({
        "id": f"btn-{i+1}",
        "left_pct": b["left_pct"],
        "top_pct": b["top_pct"],
        "width_pct": b["width_pct"],
        "height_pct": b["height_pct"],
        "cx_pct": b["cx_pct"],
        "cy_pct": b["cy_pct"],
    })

print(f"\nDetected {len(buttons)} buttons")
for b in buttons:
    print(f"  {b['id']}: pos=({b['left_pct']}%, {b['top_pct']}%) size=({b['width_pct']}%x{b['height_pct']}%)")

# ============================================================
# 3. DRAW ANNOTATED DEBUG IMAGE
# ============================================================

# Draw knobs
for k in knobs:
    cx = int(k["cx_pct"] / 100 * w)
    cy = int(k["cy_pct"] / 100 * h)
    r = int(k["r_pct"] / 100 * w)
    # Green circle
    cv2.circle(out, (cx, cy), r, (0, 255, 0), 2)
    # Center dot
    cv2.circle(out, (cx, cy), 3, (0, 0, 255), -1)
    # Label
    label = k["id"].replace("knob-", "K")
    cv2.putText(out, label, (cx - 10, cy - r - 5),
                cv2.FONT_HERSHEY_SIMPLEX, 0.4, (0, 255, 0), 1)

# Draw buttons
for b in buttons:
    x = int(b["left_pct"] / 100 * w)
    y = int(b["top_pct"] / 100 * h)
    bw = int(b["width_pct"] / 100 * w)
    bh = int(b["height_pct"] / 100 * h)
    # Magenta rectangle
    cv2.rectangle(out, (x, y), (x + bw, y + bh), (255, 0, 255), 2)
    # Label
    label = b["id"].replace("btn-", "B")
    cv2.putText(out, label, (x, y - 3),
                cv2.FONT_HERSHEY_SIMPLEX, 0.35, (255, 0, 255), 1)

cv2.imwrite(OUT_IMG, out)
print(f"\nSaved annotated image to {OUT_IMG}")

# ============================================================
# 4. SAVE JSON
# ============================================================
result = {
    "image": {"width": w, "height": h},
    "knobs": knobs,
    "buttons": buttons,
}

with open(OUT_JSON, "w") as f:
    json.dump(result, f, indent=2)

print(f"Saved JSON to {OUT_JSON}")
print(f"\nSummary: {len(knobs)} knobs, {len(buttons)} buttons")
