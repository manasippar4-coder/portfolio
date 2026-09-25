@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg: #0a0e27;
  --bg-2: #0f1329;
  --primary: #f5f5f5;
  --secondary: #a0a0a0;
  --accent: #00ff88;
  --cyan: #00d9ff;
  --gold: #d4af37;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top, rgba(0, 255, 136, 0.08), transparent 30%),
    radial-gradient(circle at bottom right, rgba(0, 217, 255, 0.08), transparent 22%),
    linear-gradient(135deg, #0a0e27 0%, #0f1329 48%, #171d36 100%);
  color: var(--primary);
  overflow-x: hidden;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(circle at center, black 30%, transparent 95%);
  pointer-events: none;
  z-index: 0;
}

#root {
  position: relative;
  z-index: 1;
}

:root {
  cursor: none;
}

html, body, a, button, input, textarea, select {
  cursor: none;
}

::selection {
  background: rgba(0, 255, 136, 0.25);
  color: white;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 136, 0.35);
  border-radius: 9999px;
}

.glass {
  background: rgba(15, 19, 41, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(0, 255, 136, 0.12);
}

.section-shell {
  position: relative;
  isolation: isolate;
}

.section-shell::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 255, 136, 0.02), transparent 40%);
  z-index: -1;
}

.glow-text {
  text-shadow: 0 0 18px rgba(0, 255, 136, 0.4);
}

.neon-glow {
  box-shadow: 0 0 24px rgba(0, 255, 136, 0.35), inset 0 0 22px rgba(0, 255, 136, 0.08);
}

.custom-cursor {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid rgba(0, 255, 136, 0.9);
  background: rgba(0, 255, 136, 0.16);
  box-shadow: 0 0 25px rgba(0, 255, 136, 0.75), 0 0 12px rgba(0, 217, 255, 0.5);
  transform: translate(-50%, -50%);
  z-index: 9999;
}

.custom-cursor::after {
  content: '';
  position: absolute;
  inset: 5px;
  border-radius: 50%;
  background: rgba(0, 255, 136, 0.7);
}

@media (max-width: 768px) {
  :root {
    cursor: auto;
  }

  html, body, a, button, input, textarea, select {
    cursor: auto;
  }

  .custom-cursor {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

:focus-visible {
  outline: 2px solid rgba(0, 255, 136, 0.9);
  outline-offset: 2px;
}

button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 2px solid rgba(0, 255, 136, 0.9);
  outline-offset: 2px;
}
