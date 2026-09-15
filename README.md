# GlowLab Beauty – Website Project

## Student Information
- **Name:** Rebecca Mojapelo
- **Module:** Web Development (Introduction) – WEDE5020
- **Part:** 2 – Designing the Visuals (CSS Styling and Responsive Design)

---

## Project Overview
GlowLab Beauty is a small, proudly South African skincare brand. This website serves as the brand’s digital storefront, providing information about products, the brand story, and a way for customers to enquire and get in touch. The site is built with HTML5, CSS3, and vanilla JavaScript.

---

## Website Goals and Objectives
- Increase online product enquiries by 20% over 6 months.
- Establish GlowLab as a credible, professional skincare brand.
- Provide a seamless, informative experience for customers to learn about products and contact the brand.
- **KPIs:** Monthly traffic, enquiry form submissions, bounce rate (under 50%), time on page.

---

## Key Features and Functionality
- **5 pages:** Home, About, Products, Enquiry, Contact.
- **Responsive design:** Adapts to desktop, tablet, and mobile.
- **Semantic HTML5:** Uses `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Navigation:** One horizontal `<nav>` on every page, linking all pages.
- **Forms:** Enquiry and Contact forms with HTML5 validation.
- **Embedded maps:** Two Google Maps iframes on the Contact page (two locations).
- **Social media links:** Clickable, open in new tab.

---

## Timeline and Milestones
| Phase | Weeks | Tasks |
|-------|-------|-------|
| Part 1 | 1–2 | Proposals, research, HTML structure, GitHub setup |
| Part 2 | 3–4 | External CSS, styling, responsive design, media queries |
| Part 3 | 5–6 | JavaScript, SEO, form validation, deployment |

---

## Part 1 Details
- Two project proposals submitted for approval (GlowLab Beauty and [Second Business]).
- Sitemap created (see below).
- File and folder structure set up:
- glowlab-beauty/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── css/
│ └── style.css
├── images/
└── js/
- HTML pages coded with semantic tags, real content, comments.
- GitHub repository created with initial commits.

---

## Part 2 Details – CSS Styling and Responsive Design

### 1. Feedback from Part 1 Implemented
The following corrections were made based on Part 1 feedback:
- Renamed images to lowercase with hyphens: `hydra-cream.webp`, `charcoal-cleanser.jpg`, `founder.jpeg`.
- Added a real logo (`images/logo.png`) and removed placeholder.
- Removed invalid `height="auto"` from `<img>` tags.
- Added phone number fields to Enquiry and Contact forms.
- Updated social media links to realistic profile URLs.
- Fixed the contact form layout by moving it outside the `.info-column`.
- Ensured all folders are lowercase (`css`, `images`, `js`).

### 2. External Stylesheet
- Created `css/style.css` and linked it to all 5 HTML pages.
- CSS includes a reset, base styles, typography, layout (Flexbox), colours, and interactive pseudo-classes.

### 3. Responsive Design
- **Breakpoint:** `@media (max-width: 600px)` for mobile.
- **Layout:** Flexbox used for header, navigation, product grids, and contact sections. Columns stack on mobile.
- **Typography:** Relative units (`rem`, `em`) used for font sizes.
- **Images:** `max-width: 100%; height: auto;` ensures images scale.
- **Navigation:** Wraps and centers on smaller screens.
- **Forms:** Full-width inputs on mobile.

### 4. Screenshots of Responsive Design
*(Paste your screenshots here – desktop, tablet, and mobile views)*

**Desktop View**  
<img width="536" height="468" alt="image" src="https://github.com/user-attachments/assets/49e69847-9733-4d2b-8d50-b24f1b21177a" />

**Tablet View**  
<img width="488" height="425" alt="image" src="https://github.com/user-attachments/assets/b747ba5d-8b84-416e-aa37-1787abdf6858" />

**Mobile View**  
<img width="535" height="430" alt="image" src="https://github.com/user-attachments/assets/27ed74e9-0158-48c2-a0ab-2715c4e2349d" />

---
-Sitemap--
<img width="940" height="529" alt="image" src="https://github.com/user-attachments/assets/aabb721d-fc56-4ede-8be1-996442e0d690" />




## Changelog

### Part 1 – Initial Development
- **2026-08-10:** Created project folder structure (index.html, about.html, products.html, enquiry.html, contact.html, css/, images/, js/).
- **2026-08-11:** Added semantic HTML structure to all pages, navigation, and content.
- **2026-08-12:** Added images, logo placeholder, and social media links.
- **2026-08-13:** Set up GitHub repository and pushed initial code. Added README.md.

### Part 2 – CSS Styling and Responsive Design
- **2026-09-01:** Received Part 1 feedback (67/100). Reviewed corrections needed.
- **2026-09-02:** Renamed images to lowercase with hyphens; created and added `logo.png`; removed `height="auto"` attributes.
- **2026-09-03:** Added phone number fields to enquiry.html and contact.html; updated social media links.
- **2026-09-04:** Moved contact form outside `.info-column` for better layout.
- **2026-09-05:** Created `css/style.css` with reset, base styles, typography, and colour scheme.
- **2026-09-06:** Applied Flexbox layout to header, navigation, product grids, and contact sections.
- **2026-09-07:** Added hover effects (pseudo-classes) to buttons, links, and product cards.
- **2026-09-08:** Implemented `@media (max-width: 600px)` for mobile; adjusted layout, typography, and navigation for smaller screens.
- **2026-09-09:** Tested on Chrome, Firefox, and Edge; used browser developer tools to simulate different devices.
- **2026-09-10:** Captured screenshots for desktop, tablet, and mobile; updated README with screenshots and Part 2 details.
- **2026-09-11:** Committed all changes with descriptive messages and pushed to GitHub.

---

## References
- W3Schools. (2026). *HTML Semantic Elements*. [Online]. Available at: https://www.w3schools.com/html/html5_semantic_elements.asp (Accessed: 10 August 2026).
- MDN Web Docs. (2026). *Responsive Design*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design (Accessed: 10 August 2026).
- Unsplash. (2026). *Free High-Resolution Skincare Images*. [Online]. Available at: https://unsplash.com/s/photos/skincare (Accessed: 10 August 2026).
- The Independent Institute of Education. (2026). *WEDE5020 Module Guide*. IIE.
- Google Maps. (2026). *Embedded Maps*. [Online]. Available at: https://www.google.com/maps (Accessed: 10 August 2026).
