# Counter App — Frontend Project

A small frontend demo built with modern tooling to showcase interactive UI basics. The app implements a counter with increment, decrement and reset actions, boundary validation, and Tailwind-based styling.

What you'll find
- A compact, single-component implementation that is easy to read and extend.
- Basic UX considerations: min/max bounds and clear user feedback.

Core concepts demonstrated
- React Hooks: `useState` for local component state.
- Event handling: discrete handlers for `Increase`, `Decrease`, and `Reset`.
- Styling: Tailwind CSS utility classes for quick layout and visual polish.

Tech stack
- React — functional components & hooks
- Vite — fast dev server and build
- Tailwind CSS — utility-first styling

Quick start
```bash
npm install
npm run dev
```
Open the app at the URL printed by Vite (usually `http://localhost:5173`).

Key file
- [src/App.jsx](src/App.jsx#L1-L200): single-file implementation demonstrating the core logic and UI.

Features
- Increment, decrement, and reset controls.
- Enforced counter range: 0 (min) to 50 (max) with alert messages.

Suggested next steps
- Replace `alert` popups with in-UI notifications or toasts.
- Add unit tests for component logic (Jest + React Testing Library).
- Improve accessibility (ARIA attributes, keyboard interactions).
- Deploy to Netlify/Vercel and add a live demo link.

---

This is intended as a focused frontend learning project and a starting point for iterative improvements.