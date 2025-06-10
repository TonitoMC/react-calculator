# React Calculator - React, Components, Testing & Linting

A simple, robust calculator app built with React, Vite, and Bun. Features a clean UI, full keyboard-free operation, and comprehensive testing and linting.
---

## 🚀 Demo

[Live Calculator](https://calicheoficial.lat/201105/calculator/)

---

## 📦 Features

- **Component-based design** using React and custom hooks
- **Operations:** Addition, subtraction, multiplication, division & modulo
- **Decimal point** support
- **9-character display limit** (extra input is ignored)
- **Error handling:**  
  - Negative results show `ERROR`
  - Results > 999999999 show `ERROR`
  - Division/modulo by zero shows `ERROR`
- **Chained operations** and intermediate results
- **Display clears** after operation or equals when a new number is entered
- **All input via buttons** (no keyboard input)
- **Custom title and favicon**
- **Modern linting and formatting** (no semicolons, max 120 chars/line)
- **No node_modules in repo**; uses Bun for package management

---

## 🛠️ Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Bun](https://bun.sh/)
- [Vitest](https://vitest.dev/) + [@testing-library/react](https://testing-library.com/)
- [ESLint](https://eslint.org/)
- [Storybook](https://storybook.js.org/)

---

## 🧪 Running Tests

- **Run all tests:**
  ```bash
  bun run test
  ```
  Do **not** use _bun test_ as it uses Bun's testing that doesn't support these visual / DOM tests, this command cannot be overwritten

## 🧹 Linting & Formatting
This code follows Javascript Standard, this means there's custom linting rules disallowing more than 120 characters per line & trailing semicolons. This can all be verified via the linting script by running

- **Lint the code:**
  ```bash
  bun lint
  ```

## 📚 Storybook

- **Run Storybook:**
  ```bash
  bun run storybook
  ```
