"""Detect knobs (circles) and buttons/regions (rectangles) on the Tempest panel photo.
Outputs coordinates as percentages of the image dimensions."""

import cv2
import numpy as np
import json

img = cv2.imread('docs/tempest-top.jpg')
h, w = img.shape[:2]
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# ── Detect circles (knobs) ──
blurred = cv2.medianBlur(gray, 5)
circles = cv2.HoughCircles(
    blurred, cv2.HOUGH_GRADIENT, dp=1.2, minDist=30,
    param1=100, param2=40, minRadius=15, maxRadius=60
)

knobs = []
if circles is not None:
    circles = np.round(circles[0]).astype(int)
    for (cx, cy, r) in circles:
        knobs.append({
            'cx_pct': round(cx / w * 100, 1),
            'cy_pct': round(cy / h * 100, 1),
            'r_pct': round(r / w * 100, 1),
            'cx_px': int(cx),
            'cy_px': int(cy),
            'r_px': int(r),
        })

# Sort by position (top-left to bottom-right)
knobs.sort(key=lambda k: (k['cy_pct'], k['cx_pct']))

# ── Detect rectangular regions (buttons, pads, screen) ──
# Use edge detection + contour finding
edges = cv2.Canny(gray, 50, 150)
# Dilate to close gaps
kernel = np.ones((3, 3), np.uint8)
edges = cv2.dilate(edges, kernel, iterations=1)

contours, _ = cv2.findContours(edges, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

rects = []
for cnt in contours:
    area = cv2.contourArea(cnt)
    if area < 500:  # skip tiny
        continue
    x, y, rw, rh = cv2.boundingRect(cnt)
    aspect = rw / rh if rh > 0 else 0
    # Filter: reasonable aspect ratio, not too huge
    if 0.3 < aspect < 5 and area < (w * h * 0.15):
        rects.append({
            'left_pct': round(x / w * 100, 1),
            'top_pct': round(y / h * 100, 1),
            'width_pct': round(rw / w * 100, 1),
            'height_pct': round(rh / h * 100, 1),
            'area': int(area),
            'x': int(x), 'y': int(y), 'w': int(rw), 'h': int(rh),
        })

# Sort rects by area descending (larger = more likely a section)
rects.sort(key=lambda r: r['area'], reverse=True)

# ── Draw detection results on a copy ──
out = img.copy()

# Draw circles
for k in knobs:
    cv2.circle(out, (k['cx_px'], k['cy_px']), k['r_px'], (0, 255, 0), 2)
    cv2.circle(out, (k['cx_px'], k['cy_px']), 2, (0, 0, 255), 3)

# Draw top 50 rectangles
for r in rects[:50]:
    cv2.rectangle(out, (r['x'], r['y']), (r['x'] + r['w'], r['y'] + r['h']), (255, 0, 255), 2)

cv2.imwrite('docs/tempest-detected.jpg', out)

print(f"Detected {len(knobs)} knobs, {len(rects)} rectangles")
print(f"\n=== KNOBS (circles) ===")
for i, k in enumerate(knobs):
    print(f"  Knob {i+1}: center=({k['cx_pct']}%, {k['cy_pct']}%) r={k['r_pct']}%")

print(f"\n=== TOP 30 RECTANGLES (by area) ===")
for i, r in enumerate(rects[:30]):
    print(f"  Rect {i+1}: left={r['left_pct']}% top={r['top_pct']}% w={r['width_pct']}% h={r['height_pct']}% area={r['area']}")

# Save JSON
with open('docs/detected-zones.json', 'w') as f:
    json.dump({'knobs': knobs, 'rects': rects[:50]}, f, indent=2)
print(f"\nSaved to docs/detected-zones.json and docs/tempest-detected.jpg")
