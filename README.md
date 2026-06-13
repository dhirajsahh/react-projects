# ⚛️ React Projects Collection

A curated collection of React components and mini-projects developed as part of a learning journey to master the React ecosystem, state management, and modern UI patterns.

## 📌 Table of Contents
- [🚀 Projects](#-projects)
- [🤖 Claude Automation](#-claude-automation)
- [📂 Project Structure](#-project-structure)
- [🛠️ Getting Started](#-getting-started)
- [🌟 Future Enhancements](#-future-enhancements)

---

## 🚀 Projects

### 1. Accordion Component
A professional, interactive accordion component designed for presenting content in a collapsible manner—ideal for FAQs, documentation, and settings panels.

**✨ Key Features:**
- **Flexible Expansion Modes**: Supports both "Single Item" (only one open at a time) and "Multiple Items" (multiple open simultaneously) modes.
- **Dynamic Toggle**: A built-in switch to toggle between expansion modes instantly.
- **State-Driven UI**: Fully managed via React hooks for seamless transitions and visibility.
- **Responsive Design**: Clean, modern CSS styling that adapts to various screen sizes.

**🛠️ Tech Stack:**
- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: CSS3

---

### 2. Random Color Generator
A fun and interactive tool that generates random colors in both Hex and RGB formats, dynamically updating the page background.

**✨ Key Features:**
- **Format Switching**: Easily toggle between Hex and RGB color representations.
- **Dynamic Background**: The entire page background changes instantly to match the generated color.
- **Real-time Value Display**: Clearly shows the generated color code on the screen.
- **State-Managed UI**: Uses React hooks to track selected format and generated color values.

**🛠️ Tech Stack:**
- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: CSS-in-JS (Inline styles)

---

## 🤖 Claude Automation

This repository leverages **Claude Code** for enhanced developer productivity. I have implemented custom automation to streamline the project setup process.

### `/create-branch` Command
A custom slash command that automates the boilerplate of starting a new project feature.

**What it does:**
1. Verifies the working directory is clean.
2. Parses project details (number and name) from arguments.
3. Generates a standardized branch name (e.g., `project/accordion`).
4. Switches to `main` and pulls the latest changes from the remote.
5. Creates and switches to the new feature branch.

**Usage:**
```bash
/create-branch "1 accordion"
```

---

## 📂 Project Structure

The project is organized to maintain scalability and separation of concerns:

```text
project-root/
├── .claude/               # Claude Code configuration and custom commands
│   └── commands/          # Automation scripts (e.g., create-branch)
├── public/                # Static assets (icons, favicons)
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── accrediation/  # Accordion component source
│   │   │   ├── index.jsx  # Component logic & structure
│   │   │   ├── data.js    # Mock data for the accordion
│   │   │   └── style.css  # Component-specific styling
│   │   └── randomColor/    # Random Color Generator source
│   │       └── index.jsx  # Component logic & structure
│   ├── App.jsx           # Main application entry point
│   ├── main.jsx          # React DOM mounting logic
│   └── index.css         # Global styles
├── package.json          # Project dependencies and scripts
└── vite.config.js        # Vite configuration
```

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js** (LTS version recommended)
- **npm** (comes bundled with Node.js)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhirajsahh/react-projects.git
   cd react-projects
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Launch development server**
   ```bash
   npm run dev
   ```
   Open the provided local URL (usually `http://localhost:5173`) in your browser.

---

## 🌟 Future Enhancements
- [ ] Implement accessibility (WAI-ARIA) for better screen-reader support.
- [ ] Add smooth CSS transitions for expanding/collapsing sections.
- [ ] Implement a theme switcher (Light/Dark mode).
- [ ] Create a more generic `Accordion` component that accepts `items` as props.

---
*Developed with ❤️ by [dhirajsahh](https://github.com/dhirajsahh)*
