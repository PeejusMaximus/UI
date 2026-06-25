---
description: "Generates a new React UI component using Tailwind CSS and the project's established styling patterns."
---

Please create a new React functional component in `src/components/` based on the following requirements:

Component Name: {{name}}
Description: {{description}}

## Constraints
- Use robust functional component syntax with prop destructuring.
- Apply styling directly in JSX using Tailwind CSS utility classes (Tailwind v4).
- Adhere to the established styling consistency: prefer CSS variables like `var(--bg)`, `var(--text)`, `var(--accent)` if specifying colors manually, or their Tailwind equivalents.
- Keep business logic completely separate. Stick to UI presentational logic.
- Do not create a separate CSS file.
- Use `lucide-react` for any necessary icons.
- Ensure the export is `export default ComponentName`.

Output the component using the `create_file` or `insert_edit_into_file` tool.
