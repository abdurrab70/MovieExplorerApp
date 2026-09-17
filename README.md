# 🎬 Movie Explorer Application

A responsive Movie Explorer Application built using JavaScript, React, React Router, Tailwind CSS, Lucida Icons and the TVMaze API.

---

## 🛠️ Tech Stack & Key Topics

Core: JavaScript, React
Styling: CSS, Tailwind CSS, Lucida Icons
Data: Free Movie Database API (TVMaze)
API Integration

### 1. **Router**

- **React Router DOM**
  Managed application routing between pages without reloading.

- **Routes Used**:
  Landing / Home Page
  movies list then -> Movie Search & Listing Page

### 2. **API Layer**

ai khane api ar data ta ke fetching kore niya asa holo

- **TVMaze API**:
- Integrated free endpoints.
  - `GET /shows`: Fetches default list of shows.
  - `GET /search/shows?q=:query`: Searches for shows based on user query.

### 3. **Hooks**

- **Custom Hook (`useMovies`)**: Centralized data fetching, loading state, error handling, and search state.
- **`useState`**: Managed movies array, selected movie, loading status, and input values.
- **`useEffect`**: Handled side-effects for API calls and query debouncing to avoid API rate limits.

### 4. **Pages**

- **`Home.jsx`**: Hero section with catchy CTA navigating to listing page.
- **`MovieListing.jsx`**: Displays search bar, movie card grid, and handles modal interactions.

### 5. **Components**

- **`Navbar.jsx`**: Top navigation header with brand title and page links.
- **`Footer.jsx`**: Standard footer with copyright and API ccyanits.
- **`MovieCard.jsx`**: Reusable card displaying poster, title, rating, release date, and "See Details" trigger.
- **`MovieModal.jsx`**: Interactive overlay window with backdrop click and ESC key exit support for deep details.
- **`Pagination.jsx`**: Controls grid display limit (12 items per page) and provides smooth page-switching navigation.

---

## How to Run Locally

1. Clone the repository:
   Github Link:
   git clone <https://github.com/abdurrab70/MovieExplorerApp.git>
   vercel deploy link: <https://extreame-movie-app.vercel.app>
