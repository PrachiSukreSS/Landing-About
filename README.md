# Coding Club RSCOE Landing & About Website

A React-based landing page and About section for the Coding Club at RSCOE. The site presents the club's mission, activities, and community through a dark purple visual theme, a video hero background, icon-based navigation, and responsive utility classes from Tailwind CSS.

> **Project status:** The current implementation is a frontend prototype. The repository's original notes indicate that responsive behavior and additional navigation pages are still being developed.

## Features

- Full-screen landing section with an autoplaying, muted, looping video background.
- Coding Club introduction with calls to action such as “Let's dive into the world of coding” and “Let's Get Started.”
- About section covering:
  - The Coding Club's purpose.
  - Its mission to support learning, innovation, and collaboration.
  - Workshops, hackathons, tech talks, and collaborative projects.
  - An invitation for beginners and experienced students to join.
- Header navigation with links for Home, About Us, Events, Our Team, and Login.
- Branding assets including a logo, background image, and video background.
- ESLint configuration for JavaScript, React Hooks, and React Fast Refresh.

## Tech stack

- **React 19** - Component-based UI development.
- **Vite 6** - Development server and production build tooling.
- **Tailwind CSS 4** - Utility-first styling, integrated through `@tailwindcss/vite`.
- **JavaScript / JSX** - Application source language.
- **Lucide React and React Icons** - Available icon libraries; the current header uses `react-icons`.
- **Google Fonts** - Inter and Sora typography.

## Project structure

```text
Landing-About/
├── README.md
└── CC Website/
    ├── index.html                 # HTML entry point and font imports
    ├── package.json                # Scripts and dependencies
    ├── package-lock.json           # Locked dependency versions
    ├── vite.config.js              # Vite and Tailwind integration
    ├── tailwind.config.js          # Tailwind content and font configuration
    ├── eslint.config.js            # ESLint rules for JS and React
    ├── public/
    │   ├── logo3.png              # Coding Club logo
    │   ├── bg.png                 # Background image asset
    │   ├── reflect bg.mp4         # Landing-section video background
    │   └── vite.svg                # Default Vite asset
    └── src/
        ├── App.jsx                # Composes Header, LandingSection, and AboutPage
        ├── main.jsx               # React application entry point
        ├── index.css              # Tailwind import and font helper classes
        ├── Components/
        │   ├── Header.jsx          # Site header and navigation links
        │   ├── LandingSection.jsx # Video hero and introductory content
        │   └── AboutPage.jsx       # Mission, activities, and join-us content
        └── assets/
            └── react.svg           # React asset from the starter template
```

## Getting started

### Prerequisites

- Node.js 18 or newer is recommended.
- npm, which is included with Node.js.

### Installation

The Vite application is inside the `CC Website` directory:

```bash
cd "CC Website"
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

### Create a production build

```bash
npm run build
```

The optimized output is generated in `CC Website/dist`.

### Preview the production build

```bash
npm run preview
```

### Run linting

```bash
npm run lint
```

## Application flow

`src/main.jsx` mounts the React application into the `root` element defined in `index.html`. `App.jsx` renders the shared `Header`, the video-based `LandingSection`, and the `AboutPage` one after another.

`LandingSection.jsx` uses a `video` element pointing to `public/reflect bg.mp4`. The video is configured to autoplay, loop, remain muted, and play inline. `AboutPage.jsx` supplies the informational content and styling for the club's mission and activities. `Header.jsx` provides the visual navigation links and uses icons from `react-icons`.

## Navigation notes

The header currently uses regular anchor links for `/`, `/about`, `/events`, `/team`, and `/login`. Only the landing and About sections are implemented in this repository, so the remaining paths require corresponding pages or backend/frontend routing to become functional.

The `#events` link in the landing section also points to an `events` anchor that is not currently present in the rendered components.

## Customization

- Update text and calls to action in `src/Components/LandingSection.jsx` and `src/Components/AboutPage.jsx`.
- Change the header links and branding in `src/Components/Header.jsx`.
- Replace `public/logo3.png`, `public/bg.png`, or `public/reflect bg.mp4` to update the visual identity.
- Adjust colors and typography with Tailwind utility classes or the font helpers in `src/index.css`.
- Update the document title and favicon in `index.html`; the current title and favicon still use the default Vite values.

## Known limitations and next steps

- Responsive navigation and layout behavior should be tested and refined across mobile, tablet, and desktop breakpoints.
- Routes for Events, Our Team, and Login are links only; their pages are not included yet.
- The landing page's `#events` target needs an Events section or a valid destination.
- There are no automated tests configured at present.
- The commented Tailwind animation note in `LandingSection.jsx` should be either implemented in the Tailwind configuration or removed.
- Unused starter assets and imports can be cleaned up as the project evolves.

## Contributing

1. Create a feature branch.
2. Make focused changes inside `CC Website`.
3. Run the linter and production build:

   ```bash
   npm run lint
   npm run build
   ```

4. Open a pull request with a summary and screenshots for visual changes.

## License

No license file is currently included in the repository. Add a license before distributing or reusing the project outside its intended organization.
