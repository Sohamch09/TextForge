# TextForge

**Clean, Transform & Analyze Text Instantly.**
TextForge is a premium, client-side, dark-mode-first text utility platform. It provides a suite of tools for developers, students, writers, and professionals—all running 100% locally in your browser with zero latency.

## 🚀 Features
- **Smart Text Cleaner:** All-in-one text processor.
- **Remove Duplicates:** Filter out redundant lines.
- **Remove Empty Lines:** Clean up whitespace.
- **Sort Lines:** Alphabetize A → Z or Z → A.
- **Word Counter:** Detailed text statistics.
- **Case Converter:** Change text casing instantly.
- **Light/Dark Mode:** Adaptive premium design system.

## 🏗️ Architecture
TextForge is built for speed and simplicity:
- **Framework:** [Astro 6](https://astro.build/) (Static Site Generation for lightning-fast page loads)
- **Interactivity:** Vanilla JavaScript (`<script>` tags) without any heavy UI framework hydration.
- **State Management:** `sessionStorage` and DOM event listeners for state persistence.
- **Styling:** Custom CSS design system using native CSS variables (`global.css`) with glassmorphism aesthetics.
- **Privacy:** 100% Client-Side execution. No data is ever sent to a server.

## 📁 Astro Project Structure
```text
/
├── public/                 # Static assets (fonts, icons)
├── src/
│   ├── assets/             # Global CSS (`global.css`)
│   ├── components/         # Reusable Astro components (Nav, Footer, Landing blocks)
│   ├── layouts/            # Page layouts (`Layout.astro`, `ToolPageLayout.astro`)
│   ├── pages/              # Routing (index.astro, tool pages like smart-cleaner.astro)
│   └── scripts/            # Shared JavaScript utilities (`text-utils.js`)
└── package.json            # Dependencies and scripts
```

## 🛠️ Development Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Start the dev server: `npm run dev`
4. Build for production: `npm run build`

## 🤝 Contributing
Contributions are highly encouraged! Whether you want to fix a bug, suggest a new text tool, or improve the UI/UX, we'd love your help.

- **Found a bug?** Open an Issue with steps to reproduce.
- **Have an idea?** Submit an Issue or open a Pull Request with your enhancements!
- **Want to add a tool?** Use `src/layouts/ToolPageLayout.astro` as a template.

All PRs for bug fixes, more enhancements, and performance optimizations are welcome.
