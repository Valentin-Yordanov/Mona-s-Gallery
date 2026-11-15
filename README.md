# Mona's Gallery

A modern fine-art portfolio and exhibition website showcasing original paintings and studies by painter Simona Dobreva (Mona).

## Overview

Mona's Gallery is a responsive web application designed with a contemporary visual identity, custom glassmorphism, and intuitive artwork browsing.

### Key Features
- **Editorial Exhibition Showcase**: Dynamic hero view, latest artworks showcase with automatic chronological sorting, and artist highlights.
- **Interactive Painting Catalog**: Complete gallery with client-side filters for availability, originality, medium, size, and price/date sorting.
- **Dynamic Artwork Inspection**: Detailed exhibition view for individual artworks with orientation detection (landscape/portrait), high-resolution zoom modal, and direct purchase inquiry flow.
- **Bilingual Support (EN / BG)**: Complete reactive internationalization for both English and Bulgarian with persistent language preference.
- **Responsive Architecture**: Floating glassmorphic navigation bar, auto-hiding scroll behaviors, and mobile-optimized layouts.

## Getting Started

To run the project locally, start any static web server in the project root:

```bash
# Using npx live-server
npx live-server
```

Or open `index.html` directly in your browser.

## Project Structure

```
├── index.html           # Home & featured showcase
├── catalog.html         # Interactive artwork gallery & filters
├── painting.html        # Dynamic artwork detail & zoom view
├── artist.html          # Artist bio & statement
├── styles.css           # Global design system & responsive styling
├── js/
│   ├── art-service.js   # Centralized data access, caching & formatting
│   ├── components.js    # Layout injection (navbar/footer) & navigation
│   └── i18n.js          # Bilingual dictionary & reactive language switcher
├── data/
│   └── paintings.json   # Artwork catalog database
├── paintings/           # High-resolution artwork images
└── page_elements/       # Modular layout components (navbar, footer, logo)
```

## Technologies

- **Vanilla HTML5 & Modern CSS3** (Custom Properties, Flexbox, CSS Grid)
- **Vanilla JavaScript (ES6+)**
- **JSON Data Architecture**
