---
name: manage-theme
description: 'Use when modifying colors, themes, or CSS variables. Provides a system to manage the styling definitions derived from src/index.css'
---

# Map and Manage Theme Variables

## When to Use
- You want to implement a new theme (like "Neon Cyberpunk" or "High Contrast").
- You are debugging Tailwind CSS variables mapping to `--bg`, `--text`, `--accent`.
- You need to add additional dynamic color palettes.

## Theme Architecture

Themes are driven entirely via CSS custom properties attached to the `:root` pseudo-class in `src/index.css`.

### Base Color Keys
Any new theme **must** remap the following base CSS variables to ensure UI coherence across the app:

- `--bg` & `--bg-subtle`: Application canvas backgrounds.
- `--text` & `--text-h`: Copy and header foregrounds.
- `--border`: Standard structural lines.
- `--accent`, `--accent-glow`, `--accent-border`: Primary brand/selection colors.

### Component-Specific Keys
The following nested keys must also be defined logically to support the custom Tailwind implementation:
- **Message Bubbles**: `--message-me-bg`, `--message-me-text`, `--message-me-border`, `--message-bot-bg`, `--message-bot-text`.
- **Sidebar**: `--sidebar-bg`, `--sidebar-text`, `--sidebar-border`, `--sidebar-hover-bg`, `--sidebar-active-bg`.
- **Utilities**: `--code-bg`, `--shadow`

## Current Implementations

1. **Luxury Sports Car Mode (Default/Dark)**: Uses Deep Space Black (`#030303`) with Premium Gold (`#e0c007`) accents.
2. **Light Mode (`.light` class)**: Clean slate (`#ffffff`) with Indigo (`#6366f1`) UI elements.

## Procedure for Generating a New Theme

To implement a new theme (e.g., `.cyberpunk`), add a new class mapping to `src/index.css` following this template:

```css
.cyberpunk {
  --bg: #09090b;
  --bg-subtle: #18181b;
  --text: #a1a1aa;
  --text-h: #f4f4f5;
  --border: #27272a;
  --accent: #f0abfc; /* bright pink/purple */
  
  /* ... follow up with --message-* and --sidebar-* variables mapped to this palette ... */
}
```
Then trigger it by attaching the class `cyberpunk` to the `<body>` or `<div id="root">` element dynamically through React state.
