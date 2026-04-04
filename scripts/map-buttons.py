"""Map detected BW template buttons to manual labels and output zones.ts entries."""
import json

with open('docs/bw-detections.json') as f:
    d = json.load(f)

rects = d['rectangles']
# Filter: small-medium buttons only (no OLED, sliders, pads)
buttons = [r for r in rects if r['area'] < 5000 and r['height'] < 5]
buttons.sort(key=lambda b: (round(b['top'] / 3) * 3, b['left']))

# Manual label mapping by position (Y band, then left-to-right)
# From the Tempest panel photo and manual

labels = {
    # Y~23: Osc section
    (23, 16): ('osc-show-btn', 'Show', 'Oscillators Show button'),

    # Y~30: Osc select
    (30, 16): ('osc-select-btn', 'Select', 'Select oscillator 1-4 (Ana/Digi)'),

    # Y~35: LPF
    (35, 44): ('lpf-4pole-btn', '4 Pole/Show', 'Toggle 2-pole/4-pole filter + Show'),

    # Y~40: Envelope
    (40, 16): ('env-admode-btn', 'AD Mode', 'Toggle AD (attack-decay only) vs ADSR'),

    # Y~45: Envelope select strip + LFO/Mixer buttons
    (45, 16): ('env-pitch-btn', 'Pitch', 'Select Pitch envelope'),
    (45, 21): ('env-lowpass-btn', 'Lowpass', 'Select Lowpass envelope'),
    (45, 25): ('env-amp-btn', 'Amp', 'Select Amp envelope'),
    (45, 29): ('env-aux1-btn', 'Aux1', 'Select Aux 1 envelope'),
    (45, 33): ('env-aux2-btn', 'Aux2', 'Select Aux 2 envelope'),
    (45, 39): ('lfo-lfo2-btn', 'LFO2', 'Toggle LFO 1/2 editing'),
    (45, 44): ('lfo-show-btn', 'Show', 'LFO Show (Shape/Destination/Sync on screen)'),
    (45, 50): ('mixer-mute-btn', 'Mute', 'Mute selected sound'),
    (45, 55): ('mixer-solo-btn', 'Solo', 'Solo selected sound'),
    (45, 61): ('mixer-show-btn', 'Show', 'Mixer Show (Delay Repeats/Time/On on screen)'),
    # Nav area right side
    (44, 67): ('nav-pageup-btn', 'Page Up', 'Screen page up'),
    (44, 72): ('nav-up-btn', 'Up', 'Navigate up'),
    (44, 76): ('nav-left-btn', 'Left', 'Navigate left'),
    (44, 81): ('nav-right-btn', 'Right', 'Navigate right'),

    # Y~48: More nav
    (48, 67): ('nav-shift-btn', 'Shift', 'Display Shift'),
    (48, 72): ('nav-down-btn', 'Down', 'Navigate down'),
    (48, 76): ('nav-pagedown-btn', 'Page Down', 'Screen page down'),
    (48, 81): ('nav-screenttl-btn', 'Screen Title', 'Screen title select'),

    # Y~51: Button strip row 1
    (51, 16): ('fx-playback1-btn', 'Playback', 'FX1/3 Playback assign'),
    (51, 22): ('fx-playback2-btn', 'Playback', 'FX2/4 Playback assign'),
    (51, 28): ('padfn-16beats-btn', '16 Beats', '16 Beats pad function'),
    (51, 32): ('padfn-16tunings-btn', '16 Tunings', '16 Tunings pad function'),
    (51, 36): ('padopt-bankb-btn', 'Sound Bank B', 'Toggle Sound Bank A/B'),
    (51, 40): ('padopt-reverse-btn', 'Reverse', 'Reverse sample playback'),
    (51, 44): ('screens-playlist-btn', 'Play List', 'Play List screen'),
    (51, 49): ('screens-events-btn', 'Events', 'Events screen'),
    (51, 53): ('recedit-click-btn', 'Click', 'Metronome click'),
    (51, 57): ('recedit-undorec-btn', 'Undo Rec', 'Undo last recording'),
    (51, 61): ('system-btn', 'System', 'System settings menu'),

    # Y~54: Transport
    (54, 67): ('transport-rewind-btn', '<<', 'Rewind'),
    (54, 69): ('transport-ff-btn', '>>', 'Fast forward'),
    (54, 71): ('transport-rec-btn', 'REC', 'Record'),
    (54, 76): ('transport-stop-btn', 'STOP', 'Stop playback'),
    (54, 80): ('transport-play-btn', 'PLAY', 'Start playback'),

    # Y~55: Button strip row 2
    (55, 16): ('fx-assign1-btn', 'Assign', 'FX1/3 Assign'),
    (55, 22): ('fx-assign2-btn', 'Assign', 'FX2/4 Assign'),
    (55, 28): ('padfn-16sounds-btn', '16 Sounds', '16 Sounds pad function'),
    (55, 32): ('padfn-16timesteps-btn', '16 Time Steps', '16 Time Steps pad function'),
    (55, 36): ('padopt-roll-btn', 'Roll', 'Roll / arpeggiate'),
    (55, 40): ('padopt-fixedlevel-btn', 'Fixed Level', 'Fixed velocity level'),
    (55, 44): ('screens-pads-btn', 'Pads', 'Pads screen'),
    (55, 49): ('screens-sounds-btn', 'Sounds', 'Sounds screen'),
    (55, 53): ('recedit-erase-btn', 'Erase', 'Erase notes/events'),
    (55, 57): ('recedit-copy-btn', 'Copy', 'Copy sound/beat'),
    (55, 61): ('system-saveload-btn', 'Save/Load', 'Save/Load menu'),
}

# Match detected buttons to labels by nearest position
output = []
unmatched = []

for b in buttons:
    y_band = round(b['top'] / 3) * 3
    x_pos = round(b['left'])

    best_key = None
    best_dist = 999
    for (ly, lx), (bid, label, tip) in labels.items():
        dist = abs(ly - b['top']) + abs(lx - b['left'])
        if dist < best_dist:
            best_dist = dist
            best_key = (ly, lx)

    if best_key and best_dist < 6:
        bid, label, tip = labels[best_key]
        output.append(f"  {{ id: '{bid}', label: '{label}', tip: '{tip}', rect: ['{b['left']}%', '{b['top']}%', '{b['width']}%', '{b['height']}%'], group: 'button' }},")
        del labels[best_key]  # Remove so we don't double-match
    else:
        unmatched.append(b)

print("=== ZONES.TS BUTTON ENTRIES ===\n")
for line in output:
    print(line)

if unmatched:
    print(f"\n=== {len(unmatched)} UNMATCHED BUTTONS ===")
    for b in unmatched:
        print(f"  left={b['left']}% top={b['top']}% w={b['width']}% h={b['height']}%")

if labels:
    print(f"\n=== {len(labels)} UNMATCHED LABELS (no button found) ===")
    for (ly, lx), (bid, label, tip) in labels.items():
        print(f"  {label} expected at Y~{ly} X~{lx}")
