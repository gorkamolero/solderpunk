"""Detect knobs within each section's bounding box, then label from the manual."""
import cv2
import numpy as np
import json

img = cv2.imread('web/public/tempest-panel.png')
h, w = img.shape[:2]

# Hand-tuned section bounding boxes (from zones.ts, as percentages)
sections = {
    'osc':     {'left': 14.9, 'top': 27.7, 'width': 22.3, 'height': 9.8,
                'knobs': ['Shape', '1/2 Mix', 'Pitch', 'Fine']},
    'lpf':     {'left': 37.2, 'top': 27.7, 'width': 16.7, 'height': 9.6,
                'knobs': ['Frequency', 'Resonance', 'Audio Mod']},
    'hpf':     {'left': 53.8, 'top': 27.5, 'width': 5.4, 'height': 10.4,
                'knobs': ['Frequency']},
    'amp':     {'left': 59.4, 'top': 27.8, 'width': 5.8, 'height': 9.5,
                'knobs': ['Feedback']},
    'env':     {'left': 14.8, 'top': 37.3, 'width': 22.4, 'height': 10.8,
                'knobs': ['Attack', 'Decay', 'Amount', 'Velocity Amt']},
    'lfo':     {'left': 36.9, 'top': 37.3, 'width': 11.4, 'height': 10.8,
                'knobs': ['Rate', 'Amount']},
    'mixer':   {'left': 48.5, 'top': 37.5, 'width': 17.1, 'height': 11.0,
                'knobs': ['Level', 'Pan', 'Delay Send']},
    'display': {'left': 65.6, 'top': 18.5, 'width': 19.7, 'height': 8.8,
                'knobs': ['Soft 1', 'Soft 2', 'Soft 3', 'Soft 4']},
}

# Knob tips from the manual
tips = {
    'osc': {
        'Shape': 'Off, Saw, Tri, Saw-Tri, Pulse 0-99%. Secondary: Sample (digital)',
        '1/2 Mix': '0=100% Osc1, 64=50/50, 127=100% Osc2. Secondary: Level (digital)',
        'Pitch': 'C0-C10 semitones (10 octaves). Secondary: Frequency (digital, -24 to +24)',
        'Fine': '-50 to +50 cents. Secondary: Pre/Post Filter (digital)',
    },
    'lpf': {
        'Frequency': '0-164. 13+ octave range. Steps in semitones slowly, smooth at speed.',
        'Resonance': '0-127. Self-oscillates at high values in 4-pole mode.',
        'Audio Mod': '0-127. FM from Osc 1 to filter cutoff. Bell-like FM sounds.',
    },
    'hpf': {'Frequency': '0-127. 2-pole -12dB/oct. 0 passes all frequencies.'},
    'amp': {'Feedback': '0-127. Feeds left output back pre-filter. 0=no feedback. Fuzzy distortion to pandemonium.'},
    'env': {
        'Attack': '0-127. Attack time of selected envelope.',
        'Decay': '0-127. Decay time. Secondary (Shift): Sustain Level 0-127.',
        'Amount': '-127 to +127. Modulation amount to destination. Amp is 0-127 only.',
        'Velocity Amt': '0-127. How much velocity affects envelope amount.',
    },
    'lfo': {
        'Rate': '0-162. Free: 30sec to 523Hz. Synced: 32 quarter notes to 64th notes.',
        'Amount': '0-127. Modulation depth to destination.',
    },
    'mixer': {
        'Level': '0-127. Per-sound volume to the mix bus.',
        'Pan': 'Stereo position. Affects feedback loop behavior.',
        'Delay Send': '0-127. Amount sent to the beat delay effect.',
    },
    'display': {
        'Soft 1': 'Context-dependent. Function shown on OLED screen.',
        'Soft 2': 'Context-dependent. Function shown on OLED screen.',
        'Soft 3': 'Context-dependent. Function shown on OLED screen.',
        'Soft 4': 'Context-dependent. Function shown on OLED screen.',
    },
}

results = {}
out = img.copy()

for sec_name, sec in sections.items():
    # Crop section from image
    x1 = int(sec['left'] / 100 * w)
    y1 = int(sec['top'] / 100 * h)
    x2 = int((sec['left'] + sec['width']) / 100 * w)
    y2 = int((sec['top'] + sec['height']) / 100 * h)

    crop = img[y1:y2, x1:x2]
    gray = cv2.cvtColor(crop, cv2.COLOR_BGR2GRAY)
    blurred = cv2.medianBlur(gray, 5)

    ch, cw = crop.shape[:2]

    # Detect circles in this section
    circles = cv2.HoughCircles(blurred, cv2.HOUGH_GRADIENT, dp=1.2, minDist=20,
        param1=80, param2=30, minRadius=8, maxRadius=40)

    knob_positions = []
    if circles is not None:
        for (cx, cy, r) in np.round(circles[0]).astype(int):
            # Convert back to full image coords
            abs_cx = x1 + cx
            abs_cy = y1 + cy
            knob_positions.append({
                'cx_pct': round(abs_cx / w * 100, 1),
                'cy_pct': round(abs_cy / h * 100, 1),
                'left_pct': round((abs_cx - r) / w * 100, 1),
                'top_pct': round((abs_cy - r) / h * 100, 1),
                'width_pct': round(2 * r / w * 100, 1),
                'height_pct': round(2 * r / h * 100, 1),
                'r': int(r),
                'abs_cx': int(abs_cx),
                'abs_cy': int(abs_cy),
            })

    # Sort left to right
    knob_positions.sort(key=lambda k: k['cx_pct'])

    expected = sec['knobs']
    found = len(knob_positions)

    print(f"\n{sec_name}: expected {len(expected)} knobs, found {found}")

    sec_results = []
    for i, name in enumerate(expected):
        if i < found:
            k = knob_positions[i]
            tip = tips.get(sec_name, {}).get(name, name)
            sec_id = f"{sec_name}-{name.lower().replace(' ', '-').replace('/', '-')}"
            entry = {
                'id': sec_id,
                'label': name,
                'tip': tip,
                'rect': [f"{k['left_pct']}%", f"{k['top_pct']}%", f"{k['width_pct']}%", f"{k['height_pct']}%"],
                'section': sec_name,
            }
            sec_results.append(entry)
            # Draw on output
            cv2.circle(out, (k['abs_cx'], k['abs_cy']), k['r'], (0, 255, 0), 2)
            cv2.putText(out, name[:8], (k['abs_cx'] - 20, k['abs_cy'] + k['r'] + 15),
                       cv2.FONT_HERSHEY_SIMPLEX, 0.35, (0, 255, 255), 1)
            print(f"  {name}: ({k['cx_pct']}%, {k['cy_pct']}%) r={k['r']}px")
        else:
            print(f"  {name}: NOT DETECTED — needs manual position")

    if found > len(expected):
        print(f"  WARNING: {found - len(expected)} extra knobs detected")
        for k in knob_positions[len(expected):]:
            print(f"    extra: ({k['cx_pct']}%, {k['cy_pct']}%)")

    results[sec_name] = sec_results

# Save
cv2.imwrite('docs/tempest-knobs-labeled.png', out)
with open('docs/knobs-per-section.json', 'w') as f:
    json.dump(results, f, indent=2)

# Generate zones.ts snippet
print("\n\n=== ZONES.TS KNOB ENTRIES ===\n")
for sec_name, knobs in results.items():
    for k in knobs:
        print(f"  {{ id: '{k['id']}', label: '{k['label']}', tip: '{k['tip']}', rect: {k['rect']}, group: 'knob' }},")

print(f"\nSaved docs/knobs-per-section.json + docs/tempest-knobs-labeled.png")
