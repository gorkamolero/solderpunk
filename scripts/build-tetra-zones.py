"""Map detected red markers to Tetra control labels and generate zones.ts entries."""
import json

with open('/tmp/tetra-markers.json') as f:
    markers = json.load(f)

labels = [
    ('select', 'Select', 'Rotary encoder — browse programs, combos, parameters', 'knob'),
    ('program-btn', 'Program', 'Enter Program mode (512 programs)', 'button'),
    ('combo-btn', 'Combo', 'Enter Combo mode (128 combos, independent 512 programs)', 'button'),
    ('global-btn', 'Global', 'Enter Global settings', 'button'),
    ('display', 'Display', 'LCD screen showing program name, parameters, values', 'nav'),
    ('write-btn', 'Write', 'Save current program/combo to memory', 'button'),
    ('volume', 'Volume', 'Master volume', 'knob'),
    ('ap1', 'Param 1', 'Assignable Parameter 1 — maps to different params per screen', 'knob'),
    ('ap2', 'Param 2', 'Assignable Parameter 2', 'knob'),
    ('ap3', 'Param 3', 'Assignable Parameter 3', 'knob'),
    ('ap4', 'Param 4', 'Assignable Parameter 4', 'knob'),
    ('pitch', 'Pitch', 'Osc 1+2 frequency. NRPN 0 (Osc1) / 5 (Osc2)', 'knob'),
    ('cutoff', 'Cutoff', 'Filter cutoff 0-164. NRPN 15', 'knob'),
    ('resonance', 'Resonance', 'Filter resonance 0-127. Self-oscillates in 4-pole. NRPN 16', 'knob'),
    ('attack', 'Attack', 'Amp envelope attack 0-127. NRPN 33', 'knob'),
    ('decay-release', 'Decay/Release', 'Amp envelope decay+release. NRPN 34/36', 'knob'),
    ('assign-params-btn', 'Assign Params', 'Map the 4 assignable knobs to parameters', 'button'),
    ('edit-b-btn', 'Edit B/Combo', 'Toggle Layer A/B editing, or cycle Combo voices', 'button'),
    ('push-it-btn', 'Push It!', 'Trigger a note without keyboard. Latch/toggle modes.', 'button'),
]

pad = 1.5

sorted_markers = sorted(markers, key=lambda m: (round(m['cy_pct'] / 15) * 15, m['cx_pct']))

used = set()
zones = []

for label_id, label_name, tip, group in labels:
    best = None
    best_dist = 999
    for i, m in enumerate(sorted_markers):
        if i in used:
            continue
        dist = abs(m['cx_pct']) + abs(m['cy_pct'])
        if best is None or dist < best_dist:
            best = i
            best_dist = dist

    if best is not None:
        m = sorted_markers[best]
        used.add(best)

for i, (label_id, label_name, tip, group) in enumerate(labels):
    if i < len(sorted_markers):
        m = sorted_markers[i]
        left = round(m['cx_pct'] - pad, 1)
        top = round(m['cy_pct'] - pad, 1)
        w = round(pad * 2 + m['r_pct'], 1)
        h = round(pad * 2 + m['r_pct'], 1)

        if label_id == 'display':
            left = round(m['cx_pct'] - 15, 1)
            top = round(m['cy_pct'] - 8, 1)
            w = 30.0
            h = 16.0

        zones.append({
            'id': label_id,
            'label': label_name,
            'tip': tip,
            'rect': [f'{left}%', f'{top}%', f'{w}%', f'{h}%'],
            'group': group,
        })

print("export const zones: Zone[] = [")
for z in zones:
    print(f"  {{ id: '{z['id']}', label: '{z['label']}', tip: '{z['tip']}', rect: {z['rect']}, group: '{z['group']}' }},")
print("]")

with open('/tmp/tetra-zones.json', 'w') as f:
    json.dump(zones, f, indent=2)
print(f"\nSaved {len(zones)} zones to /tmp/tetra-zones.json")
