# Content Authoring Guide

## Goal
Create practical, reviewable ASVS training controls that are easy to extend with AI-generated drafts and human review.

## Where Content Lives
- Categories: `content/categories.ts`
- Controls: `content/controls.ts`
- Schema: `types/content.ts`

## Control Authoring Rules
- Keep content separate from page components.
- Use concise, practical language for engineering teams.
- Include at least one secure code example where possible.
- Mark generated content as `reviewStatus: "draft"` until reviewed.
- Prefer official OWASP references and authoritative framework documentation.
- Use stable slugs such as `password-storage` or `contextual-output-encoding`.

## Expected Control Object Shape
Use the `Control` type from `types/content.ts`. Every new control should include:
- `asvsVersion`
- `categoryId`
- `controlId`
- `slug`
- `title`
- `summary`
- `explanation`
- `whyItMatters`
- `insecureExample`
- `secureGuidance`
- `codeExamples`
- `testingNotes`
- `references`
- `tags`
- `difficulty`
- `reviewStatus`
- `relatedControls`

## Example Future Prompt
```text
Generate one new OWASP ASVS training control as a TypeScript Control object.
Use the exact schema in types/content.ts.
Control: V5.1.3 Input validation strategy.
Audience: application developers and security reviewers.
Include: summary, explanation, why it matters, insecure example, secure guidance, two code examples in TypeScript and Python, testing notes, OWASP references, tags, difficulty, reviewStatus draft, and related controls.
Keep it concise, technically accurate, and ready to paste into content/controls.ts.
```

## Review Checklist
- Control ID and category are correct.
- Code examples are safe and idiomatic.
- References are valid and relevant.
- No secrets or unsafe defaults are introduced.
- Build passes with `npm run build`.
