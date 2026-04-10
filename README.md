# 🌐 Salam Plinth | Retro-Tech Portfolio

Welcome to my personal portfolio. This project is a high-end, "Retro-Tech" themed experience designed to showcase my work in full-stack development, telemetry analysis, and automation.

> [!NOTE]
> This portfolio features a **Cyber Cyan** aesthetic with CRT-inspired effects, glassmorphism, and dynamic animations.

---

## 🚀 Tech Stack

- **Core**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom Cyber Cyan theme.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth transitions and hover effects.
- **Icons**: [Lucide React](https://lucide.dev/) for crisp, scalable iconography.
- **Deployment**: [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static/) with GitHub Actions CI/CD.

---

## ✨ Key Features

- **Cyber Cyan Theme**: Integrated CRT scanlines, grid backgrounds, and neon glow effects.
- **Dynamic Project Showcase**: Automatically renders projects from a centralized configuration.
- **Telemetry Analysis**: Specialized sections for projects like the **F1 2021 Telemetry Analysis**.
- **Responsive Design**: Optimized for everything from ultra-wide monitors to mobile devices.
- **Terminal Aesthetic**: Monospace typography and typing animations for a true tech-focused feel.

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm / yarn / pnpm

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/drKriP/my-portfolio.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Configuration

To update your projects, bio, or social links, modify the configuration file:

[**`src/config.js`**](file:///c:/Users/Plint/Documents/GitHub/my-portfolio/src/config.js)

```javascript
// Example modification
projects: [
  {
    name: "F1 2021 Telemetry Analysis",
    description: "High-speed data analysis for Formula 1 telemetry...",
    github: "https://github.com/drKriP/f1-2021-telemetry-analysis",
  },
  // ... add more projects here
]
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](file:///c:/Users/Plint/Documents/GitHub/my-portfolio/LICENSE) file for details.
