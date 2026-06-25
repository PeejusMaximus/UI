---
description: "React and Tailwind CSS coding standards."
applyTo: "src/**/*.{js,jsx}"
---

# React & JavaScript
- **Functional Components**: Use functional components with hooks only. Avoid class components.
- **Hooks**: Use hooks (`useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`) as needed. Follow the Rules of Hooks.
- **State Management**: 
  - Prefer local component state or moving state up to custom hooks (e.g. `useChatManager.js`).
  - Use `localStorage` for persistent application state.
  - For larger applications, consider `useContext`.
- **Props**: Use destructuring for props. Keep prop drilling to a minimum.
- **File Naming**: PascalCase for components (e.g., `MessageList.jsx`), camelCase for utility files and hooks.

# Styling (Tailwind CSS)
- **Utility-First**: Use Tailwind CSS utility classes directly in JSX.
- **Version**: Uses Tailwind CSS v4 via Vite plugin.
- **Responsive Design**: Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, etc.) for all layouts.
- **Consistency**: Follow established spacing and color patterns found in the existing components.
- **Typography**: Use the `@tailwindcss/typography` (`prose`) class when rendering Markdown content.

# Component Architecture
- **Modularity**: Components should be small, focused, and reusable.
- **Separation of Concerns**: Keep UI logic (presentational) separate from business logic (container/stateful) where appropriate.
- **Folder Structure**:
  - `src/components/`: Reusable UI components.
  - `src/assets/`: Static assets.
  - `src/hooks/`: Custom state management logic.
  - `src/App.jsx`: Main application layout.
