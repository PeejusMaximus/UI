# Contributing to Chat Interface Project

Thank you for your interest in contributing! Please follow these guidelines to ensure a consistent development experience.

## 🛠 Development Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    The application will be available at the URL provided in the terminal (usually `http://localhost:5173`).

3.  **Run Linting**:
    Before submitting any changes, ensure your code passes the linter:
    ```bash
    npm run lint
    ```

4.  **Build for Production**:
    To test the production build locally:
    ```bash
    npm run build
    npm run preview
    ```

## 📐 Coding Standards

### 1. React & JavaScript
- Use **functional components** and **React Hooks**.
- Follow the **Rules of Hooks**.
- Use **PascalCase** for component filenames (e.g., `MessageList.jsx`).
- Use **camelCase** for non-component files and utility functions.
- Destructure props in component signatures.

### 2. Styling (Tailwind CSS)
- Use **Tailwind CSS utility classes** directly in your JSX.
- Implement **responsive designs** using Tailwind's responsive modifiers (`sm:`, `md:`, etc.).
- Maintain visual consistency with existing components.
- For Markdown content, use the `prose` class from `@tailwindcss/typography`.

### 3. Component Design
- **Single Responsibility**: Each component should do one thing well.
- **Modularity**: Break down large components into smaller, reusable ones.
- **Props over State**: Prefer passing data via props rather than duplicating state.

## 📁 Project Structure

- `src/components/`: All UI components.
- `src/assets/`: Images, icons, and other static assets.
- `src/App.jsx`: Main entry point and global state management.
- `src/main.jsx`: React DOM rendering.
- `public/`: Static assets served directly.
- `memories/`: Project plans and session-specific notes.

## 📝 Documentation

- Refer to `AGENTS.md` for detailed AI agent instructions and coding standards.
- Check `/memories/session/plan.md` for the overall project roadmap.

## 🚀 Workflow

1.  **Create a new branch** for your feature or fix.
2.  **Implement your changes** following the coding standards.
3.  **Verify your changes** by running the dev server and checking the UI.
4.  **Run `npm run lint`** to ensure code quality.
5.  **Submit a Pull Request** with a clear description of your changes.
