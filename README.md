# ASVS Academy

Static-first OWASP ASVS training portal built with Next.js, TypeScript, Tailwind CSS, and reusable content-driven components.

## Architecture
- `app/` contains the static export pages, layouts, and route-level UI.
- `components/` contains reusable presentation components and accessible building blocks.
- `content/` contains structured training data separate from presentation.
- `types/` defines the content schema for future AI-assisted control generation.
- The project uses Next.js static export so it can be deployed to GitHub Pages or any static host.

## Content Model
Each control is a single MDX file in `content/controls/` with YAML frontmatter for structured
metadata (see `lib/content/schema.ts`) and a Markdown body for the educational narrative and
code examples.

## Adding a New Control
1. Create `content/controls/<slug>.mdx` with valid frontmatter (control ID, chapter, section, tags, references).
2. Write the body using the seven-section template (What This Control Means, Why This Matters,
   Main Security Requirement, Common Failure Patterns, Secure Implementation, Key Rules,
   Checklist for Code Review).
3. Run `npm run build` to validate frontmatter against the schema and generate the page.

See `CONTRIBUTING.md` or the in-app Contribute page (`/contribute/`) for the full guide.

## Deployment
- Run `npm run build` to generate the static export.
- Deploy the generated output to GitHub Pages or any static file host.

## Notes
- Search is currently a UI placeholder and can later be wired to a static index.
- The design system is intentionally small and reusable so content can scale without redesigning page templates.
