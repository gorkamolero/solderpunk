# Solderpunk Panel Detection Pipeline

Reusable process for mapping controls on any synth panel image.

## Steps

### 1. Generate panel illustration
Use Nano Banana (Gemini image gen) to create a clean flat illustration from a photo:
```bash
GEMINI_API_KEY=... uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Clean flat technical illustration..." \
  --input-image <photo> --filename panel.png --resolution 2K
```

### 2. Mark controls with red dots
Ask Nano Banana to add numbered red markers to every control:
```bash
GEMINI_API_KEY=... uv run ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Mark EVERY interactive control with a bright red filled circle and white number..." \
  --input-image panel.png --filename panel-marked.png --resolution 2K
```

### 3. Detect red markers
```bash
python3 scripts/detect-marked-controls.py panel-marked.png output.json
```

### 4. Map to labels
Match detected positions to control names from the manual. Verify visually.

### 5. Generate zones.ts
Convert positions to percentage-based rect arrays for the web app.

## Scripts
- `detect-marked-controls.py` — OpenCV red marker detection (any synth)
- `detect-zones.py` — OpenCV knob/button detection on BW templates (Tempest)
- `build-tetra-zones.py` — Map Tetra markers to labels
- `map-buttons.py` — Map detected buttons to manual labels (Tempest)
