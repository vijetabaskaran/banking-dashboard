# Banking Products Dashboard

A single-page dashboard to view and manage multiple banking products in one place.

## Technologies
React (Vite), JavaScript, HTML5, CSS3, Lucide React icons

## Key Features
- Sidebar navigation, collapsible on mobile
- Summary cards: total products, active products, savings, loans
- Category filters, search by name or category, status filter, clear filters
- Product cards with status badges and key metrics
- Details modal, with Continue Application for pending products
- Empty state, toast feedback, fully responsive layout

## Folder Structure
```
src/
  components/  Sidebar, Header, OverviewCards, CategoryFilters, ProductCard, ProductDetailsModal
  data/        products.js (mock data)
  styles/      global.css, dashboard.css, components.css
  App.jsx
  main.jsx
```

## Installation
```bash
npm install
```

## Run
```bash
npm run dev
```
Open http://localhost:5173

## Data
All product data comes from the mock file `src/data/products.js`. No backend or database is required.