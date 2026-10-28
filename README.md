# GlowLab Beauty – Website Project

## Student Information
- **Name:** Rebecca Mojapelo
- **Module:** Web Development (Introduction) – WEDE5020
- **Live Website Link:** https://glowlabbeauty.netlify.app

---

## Project Overview
GlowLab Beauty is a small, proudly South African skincare brand. This website serves as the brand’s digital storefront, providing information about our natural products, the brand story, and a way for customers to enquire and get in touch. The site is built using HTML5, CSS3, and Vanilla JavaScript.

## Website Goals and Objectives
- Increase online product enquiries by 20% over 6 months.
- Establish GlowLab as a credible, professional skincare brand.
- Provide a seamless, informative experience for customers to learn about products and contact the brand.
- **KPIs:** Monthly traffic, enquiry form submissions, bounce rate (under 50%), time on page.

## Key Features and Functionality
- **5 Pages:** Home, About, Products, Enquiry, Contact.
- **Responsive Design:** Adapts to desktop, tablet, and mobile using CSS Flexbox/Grid and media queries.
- **Semantic HTML5:** Uses `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- **Interactive Elements (JavaScript):** 
  - Accordion for ingredients (About page).
  - Real-time product search filter (Products page).
  - Image Lightbox popup (Products page).
- **Interactive Map:** Leaflet.js map with custom markers for both studio locations (Contact page).
- **Form Validation:** Custom JavaScript validation with inline error messages and simulated AJAX responses (Enquiry & Contact pages).
- **SEO:** Meta descriptions, keywords, and titles on all pages. Includes `robots.txt` and `sitemap.xml`.

## Timeline and Milestones
| Phase | Weeks | Tasks |
|-------|-------|-------|
| Part 1 | 1–2 | Proposals, research, basic HTML structure, GitHub setup |
| Part 2 | 3–4 | External CSS, styling, responsive design, media queries |
| Part 3 | 5–6 | JavaScript interactivity, Leaflet map, SEO, form validation, deployment |

---

## Feedback Implementation (Crucial for Marks)

### Part 2 Feedback Fixed (For Part 3 Submission)
After receiving my Part 2 mark (98/100), I implemented the following specific fixes based on the lecturer's feedback to ensure a perfect score for Part 3:

1. **Layout Structure (Fixed from 4/5 to 5/5):** 
   - *Feedback:* "Elements are positioned correctly, but there may be minor issues with alignment or spacing."
   - *Fix:* I completely restructured the `contact.html` page. I moved the form out of the `.info-column` and used **CSS Grid** (`grid-template-columns: 1fr 1fr;`) to ensure the locations, map, and form align perfectly side-by-side on desktop screens.
2. **Typography Styles (Fixed from 4/5 to 5/5):**
   - *Feedback:* "Text elements adapt mostly correctly, but there may be minor issues."
   - *Fix:* I added specific responsive typography rules inside the `@media (max-width: 600px)` query, explicitly reducing the `font-size` of `h1`, `h2`, `h3`, and `p` using `rem` units so text fits perfectly on mobile phones without overflowing.
3. **References (Fixed from 4/5 to 5/5):**
   - *Feedback:* "References are present but could be improved."
   - *Fix:* I expanded my reference list to include the new technologies used in Part 3 (Leaflet.js, MDN Web Docs, Netlify) and formatted them perfectly according to the Harvard referencing style. I also included an AI disclosure.


## Changelog (Record of Development)

### Part 1 – Initial Development
- **2026-08-10:** Created project folder structure (`index.html`, `about.html`, `products.html`, `enquiry.html`, `contact.html`, `css/`, `images/`, `js/`).
- **2026-08-11:** Added semantic HTML structure to all pages, navigation, and content.
- **2026-08-12:** Added images, logo placeholder, and social media links.
- **2026-08-13:** Set up GitHub repository and pushed initial code. Added README.md.

### Part 2 – CSS Styling & Initial Fixes
- **2026-09-01:** Reviewed Part 1 feedback. Added phone number fields to forms and fixed social media links.
- **2026-09-04:** Created `css/style.css` with CSS reset, base styles, typography, and the green/beige colour scheme.
- **2026-09-05:** Applied Flexbox layout to header, navigation, and product grids. Added hover effects (pseudo-classes).
- **2026-09-06:** Implemented `@media (max-width: 600px)` for mobile. Tested on Chrome and Edge.

### Part 3 – Feedback Fixes, JavaScript, SEO & Deployment
- **2026-09-15:** **Fixed Part 2 Feedback:** Replaced contact page divs with CSS Grid for perfect alignment.
- **2026-09-16:** **Fixed Part 2 Feedback:** Added specific `rem` typography sizing in the mobile media query to prevent text overflow.
- **2026-09-17:** Added `js/script.js` and implemented the interactive Accordion (About page) and Search Filter + Lightbox (Products page).
- **2026-09-18:** Replaced the static Google Maps iframe with an interactive Leaflet.js map containing two custom markers.
- **2026-09-19:** Wrote custom JavaScript validation for the Enquiry and Contact forms. Added inline red error messages and simulated AJAX responses to prevent page reloads.
- **2026-09-20:** Added SEO meta tags (`description`, `keywords`) to the `<head>` of all 5 HTML pages. Created `robots.txt` and `sitemap.xml`.
- **2026-09-21:** **Fixed Part 2 Feedback:** Updated References list with comprehensive Harvard formatting. Deployed the final website to Netlify.

---

## References (Harvard Style)

- Google. (2026). *Search Engine Optimization (SEO) Starter Guide*. [Online]. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 20 September 2026).
- Leaflet. (2026). *Leaflet - a JavaScript library for interactive maps*. [Online]. Available at: https://leafletjs.com/ (Accessed: 18 September 2026).
- MDN Web Docs. (2026). *Client-side form validation*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation (Accessed: 19 September 2026).
- Netlify. (2026). *Deploy your website*. [Online]. Available at: https://www.netlify.com/ (Accessed: 21 September 2026).
- Unsplash. (2026). *Free High-Resolution Skincare Images*. [Online]. Available at: https://unsplash.com/s/photos/skincare (Accessed: 10 August 2026).
- W3Schools. (2026). *How To - CSS Accordion*. [Online]. Available at: https://www.w3schools.com/howto/howto_js_accordion.asp (Accessed: 17 September 2026).
- W3Schools. (2026). *How To - Lightbox*. [Online]. Available at: https://www.w3schools.com/howto/howto_js_lightbox.asp (Accessed: 17 September 2026).
- The Independent Institute of Education. (2026). *WEDE5020 Module Guide*. IIE.

