# Fake Store

A shopping application built with React, TypeScript, and Vite.

## Requirements

- Node.js `24.22.1`
- npm

The required Node.js version is specified in `.nvmrc`.

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd Shop
```

Replace `<repository-url>` with the repository URL.

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL printed in the terminal.

## Available Scripts

| Command                | Description                                     |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Start the development server                    |
| `npm run build`        | Run TypeScript checks and build the application |
| `npm run preview`      | Preview the production build                    |
| `npm run lint`         | Check code with ESLint                          |
| `npm run lint:fix`     | Automatically fix ESLint issues                 |
| `npm run typecheck`    | Run TypeScript checks                           |
| `npm run format`       | Format project files with Prettier              |
| `npm run format:check` | Check formatting with Prettier                  |

## Code Editor Setup

Visual Studio Code is recommended.

Install the following extensions:

- **ESLint** — `dbaeumer.vscode-eslint`
- **Prettier - Code formatter** — `esbenp.prettier-vscode`

Project-specific VS Code settings are stored in `.vscode/`.

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Chakra UI
- SCSS
- i18next
- Axios
- React Hook Form
- Zod
- Zustand
- ESLint
- Prettier
- Husky and lint-staged

## Project Structure

```text
src/
├── api/          # API requests and server communication
├── app/          # Application routes and routing configuration
├── assets/       # Static assets, such as images and icons
├── components/   # Reusable UI components
├── hooks/        # Custom React hooks
├── i18n/         # Internationalization and translation files
├── pages/        # Application pages
├── provider/     # React context providers
├── stores/       # Global state management with Zustand
├── styles/       # Global styles, variables, mixins, and reset
├── types/        # Shared TypeScript types
└── utils/        # Helper functions and utilities
```

### Architecture

- **`app/`** contains routing configuration.
- **`components/`** contains reusable UI components.
- **`pages/`** contains page-level components.
- **`api/`** handles communication with external APIs.
- **`hooks/`** contains custom React hooks.
- **`stores/`** manages shared application state.
- **`types/`** contains shared TypeScript definitions.
- **`utils/`** contains reusable helper functions.
- **`i18n/`** contains translation resources and internationalization setup.
- **`styles/`** contains global SCSS styles and design variables.
