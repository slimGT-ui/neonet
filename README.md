# NEONET ⚡

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-black?style=for-the-badge)](https://slimgt-ui.github.io/neonet/)
[![GitHub](https://img.shields.io/badge/GitHub-slimGT--ui-181717?style=for-the-badge&logo=github)](https://github.com/slimGT-ui/neonet)
[🚀 Открыть сайт](https://slimgt-ui.github.io/neonet/)


> **Internet without the waiting.**

A cutting-edge landing page for a fictional internet provider that doesn't just tell you about speed — it makes you *feel* it.

![NEONET Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Built with](https://img.shields.io/badge/Built%20with-Vanilla%20JS-yellow) ![Speed Mode](https://img.shields.io/badge/Speed%20Mode-Enabled-success)

---

## 🚀 Features

- **Interactive Speed Test** — Real-time speed testing animation with live metrics
- **Speed Mode** — Toggle to make the entire site 3x faster (animations, counters, everything)
- **Custom Cursor** — A sleek green dot that follows your every move
- **Live Network Stats** — Watch the numbers fluctuate in real-time
- **Interactive Network Map** — Hover over nodes to see ping, traffic, and status
- **Dynamic Pricing** — Switch between monthly and yearly plans with live price updates
- **Smooth Animations** — GSAP-powered transitions and scroll effects
- **Buttery Smooth Scroll** — Lenis for that premium feel
- **Fully Responsive** — From 4K monitors to iPhone SE

---

## 🎨 Design Philosophy

NEONET isn't a typical landing page. It's an **experience**.

- **Huge typography** (120-180px headlines) that demands attention
- **Micro-interactions** everywhere — buttons lift, cards scale, numbers count up
- **Dark theme** with electric lime green (#B6FF00) accents
- **Minimal, brutalist aesthetic** — no fluff, just speed

The entire site is designed to feel as fast as the product it's selling.

---

## 🛠️ Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Custom properties, Grid, Flexbox
- **Vanilla JavaScript** — No frameworks, pure performance
- **GSAP** — Professional-grade animations
- **Lenis** — Smooth scroll library
- **Space Grotesk** — Modern geometric typeface

---

## 📦 Project Structure


neonet/
├── index.html
├── css/
│ ├── reset.css # CSS reset
│ ├── variables.css # Design tokens
│ ├── navbar.css # Navigation styles
│ ├── hero.css # Hero section
│ ├── sections.css # All content sections
│ └── animations.css # Modals & effects
└── js/
├── main.js # Core initialization
├── speedTest.js # Speed test modal
├── interactive.js # Activity selector & sliders
├── animations.js # Scroll animations & cursor
└── orderForm.js # Order flow (disabled)
📄
text


---

## 🚀 Quick Start

bash
Clone the repository

git clone https://github.com/твой-username/neonet.git

Navigate to the project
cd neonet
Open in browser
open index.html
📄
text


Or use a local server:

bash
Python 3

python -m http.server 8000

Node.js (with live-server)
npx live-server
📄
text


Then visit `http://localhost:8000`

---

## ⚡ Speed Mode

Press the **SPEED MODE** toggle in the navbar to:
- Speed up all animations by 3x
- Make counters increment faster
- Watch the network map go wild

It's not just a gimmick — it's a statement.

---

## 🎯 Key Sections

### 1. Hero
Massive headline with a real-time speed counter that animates from 0 to 942 Mbps on load.

### 2. Speed Test
Full-screen modal that simulates an internet speed test with animated progress bars.

### 3. Benefits
Three cards highlighting Speed, Stability, and Low Latency with hover effects.

### 4. Activity Selector
Choose your use case (Gaming, Streaming, Work, Everyday) and see tailored plans.

### 5. Network Map
Interactive SVG map of German cities with pulsing nodes and animated data packets.

### 6. Live Stats
Four metrics that change in real-time to simulate network activity.

### 7. Pricing
Three plans with monthly/yearly toggle and a 20% savings badge.

### 8. Testimonials
Carousel of customer reviews with smooth transitions.

### 9. FAQ
Accordion-style questions with rotating icons.

---

## 🎨 Color Palette

css
--bg-primary: #050505 / Almost black /
--text-primary: #FFFFFF / Pure white /
--text-secondary: #888888 / Gray /
--accent: #B6FF00 / Electric lime /
📄
text


---

## 📱 Responsive Breakpoints

- **Desktop**: 1440px+
- **Laptop**: 1024px - 1439px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

---

## 🧪 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

---

## 📝 License

This is a portfolio project. Feel free to use it as inspiration, but don't straight-up clone it for commercial use.

---

## 👤 Author

**slm**

- Portfolio: [none]
- GitHub: [@slimGT-ui](https://github.com/slimGT-ui)

---

## 🙏 Credits

- Fonts: [Google Fonts - Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)
- Animations: [GSAP](https://greensock.com/gsap/)
- Smooth Scroll: [Lenis](https://github.com/studio-freight/lenis)

---

## 🔥 Fun Facts

- The speed counter animation uses easing functions for a realistic feel
- Network data packets follow SVG paths using `animateMotion`
- The custom cursor has a 0.8 follow speed for snappy movement
- Live stats fluctuate by ±0.2% every 2 seconds
- Speed Mode reduces animation duration to 30% of normal

---

**Built with ⚡ by slm in 2026**


