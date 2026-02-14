# Head & Neck question bank

This folder contains **per-topic JSON files** for the Head & Neck quizzes.

## Files
- `face_and_scalp.json`
- `eye_and_orbit.json`
- `tongue_and_submandibular.json`
- `neck_muscles_and_triangles.json`
- `hn_collection.json`

## Format
Each file is a JSON array of question objects:

```json
[
  {
    "questionText": "...",
    "options": ["A", "B", "C", "D"],
    "correctAnswerIndex": 0
  }
]
```

## Keeping the app in sync
The app still supports `assets/quiz_data.json`. To export/sync:
- Export from `assets/quiz_data.json` into this folder
- Sync edits from this folder back into `assets/quiz_data.json`

Use the script in `scripts/head_and_neck_folder.py`.
