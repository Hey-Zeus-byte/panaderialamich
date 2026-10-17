# Panaderia La Michoacana

React website built with Vite, React Router, and styled-components.

## Requirements

Use Node.js 24 LTS and npm. If you use nvm, run `nvm install` and `nvm use`.
Node.js 14 is no longer supported. Use npm and the committed package-lock.json
as the dependency source of truth.

## Development

`npm ci` installs dependencies from the lockfile.
`npm start` (or `npm run dev`) starts the development server at
http://localhost:3000 (or the next available port).

## Production

`npm run build` creates the production site in `build/`.
`npm run preview` serves that build locally for inspection.
`npm run deploy` builds and publishes `build/` to the gh-pages branch.
Deployment changes the live site; run it only when ready to publish.

The custom-domain file in `public/CNAME` is copied into the build.
The root `CNAME` is retained for the repository's existing domain configuration.
HashRouter preserves the existing /#/pan and /#/pasteles URLs on static hosting.

## Structure

- `src/pages/`: Home, Pan, and Pasteles pages
- `src/components/`: shared navigation, footer, and image slider
- `src/styles/`: responsive sizing and breakpoint helpers
- `src/images/` and `src/videos/`: bundled media
- `public/`: files copied unchanged into the build
- `index.html`: Vite entry document, including existing Google Analytics

JSX source files use the .jsx extension. Styling, content, and React versions
were retained during the migration from Create React App.
There is currently no automated test suite configured.
