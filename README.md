# 🍽️ Recipe Collection App | Level 1 - Day 11 Internship Task

A fully responsive, dynamic Recipe Collection web application built as part of the Web Development Internship Track (Level 1 - Day 11). 

## 📖 Project Overview
The objective of this task was to build a single recipe card page. However, this project was taken a step further (Advanced Level) to create a **Dynamic Recipe Application**. Users can browse a collection of 15 different recipes laid out in a responsive grid. Clicking on "View Recipe" opens a beautifully designed modal (popup) displaying the full ingredients list and step-by-step preparation process without reloading the page.

## ✨ Features (Advanced Level Implementation)
- **Dynamic Rendering:** All recipe cards are generated dynamically using a JavaScript Data Array. Adding a new recipe requires zero HTML changes.
- **Responsive Grid Layout:** The layout shifts from a single column on mobile to a 3-column grid on desktop using CSS Grid (`grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))`).
- **Interactive Modal (Popup):** Displays detailed recipe information (Ingredients and Instructions) using smooth animations and a backdrop blur effect.
- **Semantic HTML5:** Utilizes proper semantic tags like `<article>`, `<figure>`, `<figcaption>`, `<ol>`, and `<ul>` for better structure and SEO.
- **Modern CSS:** Built using CSS Variables (Custom Properties) for easy theming, Flexbox for internal card alignment, and smooth hover transitions.
- **Accessibility (a11y):** Includes `aria-label` attributes, keyboard focus states, and prevents background scrolling when the modal is open.

## 🛠️ Tech Stack
- **HTML5** (Semantic Structure)
- **CSS3** (Grid, Flexbox, Variables, Animations)
- **JavaScript (ES6+)** (DOM Manipulation, Array Methods, Event Listeners)
