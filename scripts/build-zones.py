"""Take raw OpenCV detections and cluster them into named Tempest panel zones.
Outputs zones.ts-compatible data."""

import json

with open('docs/detected-zones.json') as f:
    data = json.load(f)

knobs = data['knobs']
rects = data['rects']

# ── Group knobs by Y position (rows) ──
# Row 1: ~30% Y (top synth knobs)
# Row 2: ~40% Y (second row: envelopes, LFO, mixer)
# Master knobs: ~21% Y, far right

row1_knobs = [k for k in knobs if 28 < k['cy_pct'] < 34]  # ~30%
row2_knobs = [k for k in knobs if 37 < k['cy_pct'] < 44]  # ~40%
master_knobs = [k for k in knobs if k['cy_pct'] < 28]       # top area

# Sort each row by X
row1_knobs.sort(key=lambda k: k['cx_pct'])
row2_knobs.sort(key=lambda k: k['cx_pct'])
master_knobs.sort(key=lambda k: k['cx_pct'])

print("=== Row 1 knobs (synthesis) ===")
for k in row1_knobs:
    print(f"  ({k['cx_pct']}%, {k['cy_pct']}%)")

print("\n=== Row 2 knobs (mod/env) ===")
for k in row2_knobs:
    print(f"  ({k['cx_pct']}%, {k['cy_pct']}%)")

print("\n=== Master/display knobs ===")
for k in master_knobs:
    print(f"  ({k['cx_pct']}%, {k['cy_pct']}%)")

# ── Identify pads (rectangles ~6% wide, ~10% tall, in bottom half) ──
pads = [r for r in rects if 4.5 < r['width_pct'] < 7 and 8 < r['height_pct'] < 12 and r['top_pct'] > 55]
pads.sort(key=lambda r: (r['top_pct'], r['left_pct']))

print(f"\n=== {len(pads)} Pads ===")
for i, p in enumerate(pads):
    print(f"  Pad: left={p['left_pct']}% top={p['top_pct']}% w={p['width_pct']}% h={p['height_pct']}%")

# ── Build zones from knob clusters ──
# Row 1 knob X positions: analyze gaps to find section boundaries
# Looking at row1: knobs at x ~ 22.9, 28.6, 34.4, 45.8, 51.4, 57.1, 62.7, 68.4, 73.4, 78.7, 84.0
# The manual tells us:
#   Oscillators: 5 knobs (Shape, 1/2 Mix, Pitch, Fine + Select button)
#   Lowpass: 3 knobs (Freq, Reso, AudioMod) + 4pole button
#   Highpass: 1 knob (Freq)
#   Amp: 1 knob (Feedback)
# From the detected positions, there's a gap between ~34.4 and ~45.8 (Lowpass section starts)

def bbox_from_knobs(knob_list, pad_pct=3):
    """Create a bounding box around a group of knobs with padding."""
    xs = [k['cx_pct'] for k in knob_list]
    ys = [k['cy_pct'] for k in knob_list]
    rs = [k['r_pct'] for k in knob_list]
    left = min(xs) - max(rs) - pad_pct
    top = min(ys) - max(rs) - pad_pct
    right = max(xs) + max(rs) + pad_pct
    bottom = max(ys) + max(rs) + pad_pct
    return {
        'left': round(left, 1),
        'top': round(top, 1),
        'width': round(right - left, 1),
        'height': round(bottom - top, 1),
    }

# Row 1 sections (based on X gaps and manual knowledge)
osc_knobs = [k for k in row1_knobs if k['cx_pct'] < 40]      # ~22.9, 28.6, 34.4
lpf_knobs = [k for k in row1_knobs if 40 < k['cx_pct'] < 60] # ~45.8, 51.4, 57.1
hpf_knobs = [k for k in row1_knobs if 60 < k['cx_pct'] < 66] # ~62.7
amp_knobs = [k for k in row1_knobs if 66 < k['cx_pct'] < 76] # ~68.4, 73.4
# 78.7, 84.0 are probably envelope knobs bleeding into row 1 or master section

# Row 2 sections
env_knobs = [k for k in row2_knobs if k['cx_pct'] < 42]       # ~22.8, 28.6, 34.3, 40.0
lfo_knobs = [k for k in row2_knobs if 42 < k['cx_pct'] < 50]  # ~45.7
mixer_knobs = [k for k in row2_knobs if 50 < k['cx_pct'] < 65] # ~51.2, 57.1, 62.8

# Display area (largest rectangle in top-right area)
display_rect = next((r for r in rects if r['width_pct'] > 15 and r['top_pct'] < 35 and r['left_pct'] > 60), None)

# FX sliders area (tall rect on left)
slider_rect = next((r for r in rects if r['height_pct'] > 20 and r['left_pct'] < 20 and r['top_pct'] > 55), None)

# ── Build final zones ──
zones = {}

if osc_knobs:
    b = bbox_from_knobs(osc_knobs, pad_pct=4)
    # Extend left to include Select button area
    b['left'] = max(13, b['left'] - 3)
    zones['osc'] = b
    print(f"\nOsc zone: {b}")

if lpf_knobs:
    b = bbox_from_knobs(lpf_knobs, pad_pct=3)
    zones['lpf'] = b
    print(f"LPF zone: {b}")

if hpf_knobs:
    b = bbox_from_knobs(hpf_knobs, pad_pct=3)
    zones['hpf'] = b
    print(f"HPF zone: {b}")

if amp_knobs:
    b = bbox_from_knobs(amp_knobs, pad_pct=3)
    zones['amp'] = b
    print(f"Amp zone: {b}")

if env_knobs:
    b = bbox_from_knobs(env_knobs, pad_pct=4)
    # Extend up to include AD Mode button and env select strip
    b['top'] = max(b['top'] - 4, b['top'] * 0.85)
    b['height'] += 4
    zones['env'] = b
    print(f"Env zone: {b}")

if lfo_knobs:
    b = bbox_from_knobs(lfo_knobs, pad_pct=3)
    zones['lfo'] = b
    print(f"LFO zone: {b}")

if mixer_knobs:
    b = bbox_from_knobs(mixer_knobs, pad_pct=3)
    zones['mixer'] = b
    print(f"Mixer zone: {b}")

if display_rect:
    zones['display'] = {
        'left': display_rect['left_pct'],
        'top': display_rect['top_pct'],
        'width': display_rect['width_pct'],
        'height': display_rect['height_pct'],
    }
    print(f"Display zone: {zones['display']}")

if master_knobs:
    b = bbox_from_knobs(master_knobs, pad_pct=3)
    zones['master'] = b
    print(f"Master zone: {b}")

if slider_rect:
    zones['fx-sliders'] = {
        'left': slider_rect['left_pct'],
        'top': slider_rect['top_pct'],
        'width': slider_rect['width_pct'],
        'height': slider_rect['height_pct'],
    }
    print(f"FX sliders zone: {zones['fx-sliders']}")

# Pads
if len(pads) >= 16:
    # Top row (first 8)
    top_pads = pads[:8]
    bottom_pads = pads[8:16]
    for i, p in enumerate(top_pads):
        zones[f'pad-{i+1}'] = {
            'left': p['left_pct'], 'top': p['top_pct'],
            'width': p['width_pct'], 'height': p['height_pct'],
        }
    for i, p in enumerate(bottom_pads):
        zones[f'pad-{i+9}'] = {
            'left': p['left_pct'], 'top': p['top_pct'],
            'width': p['width_pct'], 'height': p['height_pct'],
        }

# ── Output as TypeScript ──
print("\n\n=== ZONES.TS DATA ===\n")
for name, z in zones.items():
    print(f"  {{ id: '{name}', rect: ['{z['left']}%', '{z['top']}%', '{z['width']}%', '{z['height']}%'] }},")

# Save JSON
with open('docs/panel-zones.json', 'w') as f:
    json.dump(zones, f, indent=2)
print(f"\nSaved to docs/panel-zones.json")
