# ASVS Academy

Static-first OWASP ASVS training portal built with Next.js, TypeScript, Tailwind CSS, and reusable content-driven components.

## Architecture
- `app/` contains the static export pages, layouts, and route-level UI.
- `components/` contains reusable presentation components and accessible building blocks.
- `content/` contains structured training data separate from presentation.
- `types/` defines the content schema for future AI-assisted control generation.
- The project uses Next.js static export so it can be deployed to GitHub Pages or any static host.

## Content Model
Each control record supports:
- ASVS version
- category id
- control id and slug
- title and summary
- explanation and why it matters
- insecure example and secure guidance
- code examples by language
- testing notes
- references and tags
- difficulty and review status
- related controls

## Adding a New Control
1. Add or update the control object in `content/controls.ts`.
2. Add code samples, references, and tags using the existing schema.
3. Make sure the `slug` is unique.
4. Rebuild the site to generate the static page.

## Deployment
- Run `npm run build` to generate the static export.
- Deploy the generated output to GitHub Pages or any static file host.

## Notes
- Search is currently a UI placeholder and can later be wired to a static index.
- The design system is intentionally small and reusable so content can scale without redesigning page templates.
