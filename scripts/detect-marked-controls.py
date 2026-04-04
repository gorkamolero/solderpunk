"""Detect red numbered markers on a Nano Banana annotated panel image.
Reusable across any synth — just provide the marked image and label mapping.

Usage: python3 scripts/detect-marked-controls.py <marked-image> <output-json>"""

import cv2
import numpy as np
import json
import sys

def detect_red_markers(image_path):
    img = cv2.imread(image_path)
    h, w = img.shape[:2]
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

    lower_red1 = np.array([0, 100, 100])
    upper_red1 = np.array([10, 255, 255])
    lower_red2 = np.array([160, 100, 100])
    upper_red2 = np.array([180, 255, 255])

    mask = cv2.inRange(hsv, lower_red1, upper_red1) | cv2.inRange(hsv, lower_red2, upper_red2)

    kernel = np.ones((5, 5), np.uint8)
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)

    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    markers = []
    for cnt in contours:
        area = cv2.contourArea(cnt)
        if area < 100:
            continue
        (cx, cy), radius = cv2.minEnclosingCircle(cnt)
        circularity = 4 * np.pi * area / (cv2.arcLength(cnt, True) ** 2) if cv2.arcLength(cnt, True) > 0 else 0
        if circularity > 0.5:
            markers.append({
                'cx_pct': round(cx / w * 100, 1),
                'cy_pct': round(cy / h * 100, 1),
                'r_pct': round(radius / w * 100, 1),
                'left_pct': round((cx - radius) / w * 100, 1),
                'top_pct': round((cy - radius) / h * 100, 1),
                'width_pct': round(2 * radius / w * 100, 1),
                'height_pct': round(2 * radius / h * 100, 1),
                'cx_px': int(cx),
                'cy_px': int(cy),
                'r_px': int(radius),
            })

    markers.sort(key=lambda m: (round(m['cy_pct'] / 15) * 15, m['cx_pct']))
    return markers, w, h

if __name__ == '__main__':
    image_path = sys.argv[1] if len(sys.argv) > 1 else '/tmp/tetra-marked.png'
    output_path = sys.argv[2] if len(sys.argv) > 2 else '/tmp/detected-markers.json'

    markers, w, h = detect_red_markers(image_path)
    print(f"Detected {len(markers)} red markers in {w}x{h} image:")
    for i, m in enumerate(markers):
        print(f"  {i+1:2d}. center=({m['cx_pct']}%, {m['cy_pct']}%) r={m['r_pct']}%")

    with open(output_path, 'w') as f:
        json.dump(markers, f, indent=2)
    print(f"\nSaved to {output_path}")
