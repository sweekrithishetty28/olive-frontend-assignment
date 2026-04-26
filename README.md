# 🫒 Olive Landing Page — Frontend Assessment

A pixel-perfect recreation of the [Olive App](https://www.oliveapp.com/) landing page, built as part of a frontend assessment for **Praxso**.

---

## 🖥️ Live Demo

🔗 [olive-frontend-assignment-gypieme7h.vercel.app](https://olive-frontend-assignment-gypieme7h.vercel.app)

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| React.js | UI framework |
| Tailwind CSS | Utility-first styling |
| Vite | Build tool & dev server |

---

## 📁 Folder Structure

```
src/
├── App.jsx
├── App.css              # Keyframe animations
├── index.css            # Tailwind directives + global reset
└── components/
    ├── Navbar/
    │   └── index.jsx    # Responsive navbar with mobile drawer
    ├── Hero/
    │   ├── index.jsx    # Hero section layout
    │   ├── TrustBadge.jsx   # Stacked avatars + trust text
    │   ├── HeroText.jsx     # Headline + subtitle
    │   └── CTAButtons.jsx   # iOS download + community link
    ├── PhoneMockup/
    │   ├── index.jsx        # Phone frame with ghost phones
    │   ├── ProductCard.jsx  # Product name, score, actions
    │   └── OliverSaysCard.jsx # AI insight card
    └── common/
        └── OliveLogo.jsx    # SVG logo + wordmark
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/olive-assessment.git
cd olive-assessment
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ⚙️ Tailwind Setup

Make sure `tailwind.config.js` has the correct content path:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## ✨ Features Implemented

- ✅ Fully responsive Navbar with mobile hamburger drawer
- ✅ Stacked avatar trust badge
- ✅ Bold hero headline and subtitle
- ✅ iOS Download CTA + Join Community button
- ✅ Animated phone mockup with ghost phones on both sides
- ✅ Product card with nutri-score badge
- ✅ "Oliver Says" AI insight card
- ✅ Fade-in-up entrance animations
- ✅ Floating phone animation
- ✅ Hover micro-interactions on all buttons

---

## 📸 Reference

The design is based on a screenshot from [oliveapp.com](https://www.oliveapp.com/), used solely for assessment purposes. No affiliation with Olive or its owners.

---

## 👤 Author

**Sweekrithi Shetty**
📧 sweekrithishetty1@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/sweekrithi-shetty28/)
