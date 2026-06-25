# AI Coding Agents for Chat Interface Project

This file defines the personas, coding standards, and architectural principles for AI agents working on this project.

## 🤖 Agent Personas

### Core Frontend Agent
**Role**: Expert React developer specializing in modern UI/UX and Tailwind CSS.
**Expertise**:
- React (Hooks, functional components, state management)
- Vite & modern build tools
- Tailwind CSS (Utility-first design, responsive layouts)
- Accessibility (ARIA, semantic HTML)
- Performance optimization (React.memo, useMemo, useCallback)

**Focus**: Implementing UI components, managing application state, and ensuring a seamless user experience.

### Logic & State Agent
**Role**: Expert in application logic and data persistence.
**Expertise**:
- React State Management (`useState`, `useReducer`, `useContext`)
- Browser APIs (`localStorage`, `sessionStorage`)
- Data modeling and transformation
- Error handling and edge case management

**Focus**: Managing chat history, session persistence, and complex state transitions.

## 🛠 Coding Standards & Conventions

*See `.github/instructions/react.instructions.md` for core React and Tailwind principles.*

### 1. Chat Interface Patterns
- **Auto-Scrolling**: Use a `useRef` at the bottom of the message list and `scrollIntoView({ behavior: 'smooth' })` to keep the user focused on the newest messages.
- **Input Handling**: Always use `<form onSubmit={...}>` to capture message inputs. This natively guarantees "Enter" submits and supports accessibility. Always `trim()` text before sending.
- **Optimistic UI & Streaming**: Provide instant feedback by injecting a placeholder bot message and streaming contents iteratively to the UI.
- **Event Prevention**: When nesting action buttons (e.g., a delete button inside a sidebar item), use `e.stopPropagation()` to avoid triggering the parent's selection state.
- **Message Bubble Styling**: Differentiate user vs. bot chat bubbles via asymmetric `border-radius` (e.g., `rounded-br-none` vs `rounded-bl-none`).

### 2. Technical Architecture
- **State Management**: Uses a "lifted state" pattern. Core logic resides in `src/hooks/useChatManager.js`, which provides state and handlers to `App.jsx`, then propagates them to child components via props.
- **Data Models**:
    - `Chat`: `{ id: number, title: string, messages: Message[] }`
    - `Message`: `{ id?: number, text: string, sender: 'me' | 'bot', timestamp: string }`
- **Streaming Logic**: Implemented via async generators in `src/services/api.js` using the `fetch` API reader to process Server-Sent Events (SSE). Consumed by `useChatManager.js` with `for await...of`.
- **Persistence**: Syncs state to `localStorage` using keys `chat_history` and `active_chat_id`.
- **Rendering**: Uses `react-markdown` to render bot responses.

### 3. Environment & Constraints
- **API Endpoint**: Currently uses a hardcoded IP (`http://100.101.63.115:8080`) in `api.js`. Ensure the server is reachable or update this for local dev.
- **SSE Parsing**: The manual parsing of `data: ` prefixes and newline splits in `api.js` is a known bottleneck/brittle point; handle with care when modifying streaming logic.

### 4. Documentation & Testing
- **Self-Documenting Code**: Write clean, readable code with descriptive variable and function names.
- **Comments**: Add comments to explain complex logic or non-obvious implementation details.
- **README**: Keep the `README.md` updated with any significant changes to the project structure or commands.
- **Contributing**: Refer to `CONTRIBUTING.md` for contribution guidelines.

## 🚀 Development Workflow

- **Dev Server**: `npm run dev`
- **Build**: `npm run build`
- **Linting**: `npm run lint`
- **Preview**: `npm run preview`

## 📌 Project Context & Links

- **Project Plan**: See `/memories/session/plan.md` for the high-level roadmap.
- **Phase 2 Plan**: See `/memories/session/phase2_plan.md` for current implementation details.
