# Panaderia La Michoacana

React website built with Vite, React Router, and SCSS modules.

## Requirements

Use Node.js 24 LTS and npm. If you use nvm, run `nvm install` and `nvm use`.
Node.js 14 is no longer supported. Use npm and the committed package-lock.json
as the dependency source of truth.

## Development

`npm ci` installs dependencies from the lockfile.
`npm start` (or `npm run dev`) starts the development server at
http://localhost:3000 (or the next available port).

## Structure

```text
src/
  main.jsx                  # React entry point and HashRouter
  app/                      # App shell and route definitions
  assets/
    images/                 # Logo and product photographs
    videos/                 # Home page background video
  components/
    layout/                 # ContentWrapper and Footer
    navigation/             # NavBar, hamburger button, mobile menu
    ImageSlider/            # Shared slider and its SCSS module
  data/                     # Bread, cake, and slider-image lists
  pages/
    home/                   # Home page, its sections, and SCSS module
    pan/                    # Bread gallery and its SCSS module
    pasteles/               # Cake gallery and its SCSS module
  styles/                   # Global SCSS and shared sizing helpers
  utils/                    # Google Maps link helper
public/                     # Files copied unchanged into production
index.html                  # HTML entry document and Google Analytics
vite.config.mjs             # Development server and build configuration
build/                      # Generated production site (Git-ignored)
```

Each shared component has a folder containing its JSX and SCSS module.
Page-specific sections live inside that page's `components/` folder.
Keep product names and image references in `src/data/`, rather than inside
rendering components. Put new bundled media in `src/assets/` and import it
from the source; use `public/` for files that need a fixed public filename.

Edit source files under `src/`; regenerate `build/` with `npm run build`.
There is currently no automated test suite configured.

## Styles

Component styles live alongside their JSX in `*.module.scss` files.
Vite compiles Sass and scopes class names through CSS Modules. Global styles
live in `src/styles/global.scss`, and shared helpers live in `src/styles/_helpers.scss`.
Menu state uses an `open` class. The image slider passes only its current image
URL through a CSS custom property; its visual rules are defined in SCSS.
