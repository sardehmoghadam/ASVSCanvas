export default function AuthoringPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight">Content Authoring Guide</h1>
      <p className="mt-4 text-lg text-muted-foreground">Add controls by editing structured files in <code>content/controls.ts</code>. Presentation components automatically render categories, code examples, references, tags, and related controls.</p>
      <div className="mt-10 space-y-8">
        <section>
          <h2 className="text-2xl font-semibold">Required Fields</h2>
          <p className="mt-3 text-muted-foreground">Each control includes ASVS version, category id, control id, slug, title, summary, explanation, risk rationale, insecure example, secure guidance, code examples, testing notes, references, tags, difficulty, review status, and related controls.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">AI Prompt Template</h2>
          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-slate-100"><code>{`Generate one new OWASP ASVS training control as a TypeScript Control object.\nUse this exact schema from types/content.ts.\nControl: V5.1.3 Input validation strategy.\nInclude summary, explanation, why it matters, insecure example, secure guidance, 2 code examples, testing notes, references, tags, difficulty, reviewStatus draft, and related controls.\nKeep content practical, concise, and suitable for secure coding training.`}</code></pre>
        </section>
        <section>
          <h2 className="text-2xl font-semibold">Review Workflow</h2>
          <p className="mt-3 text-muted-foreground">Generate content as draft, verify technical accuracy, check references, run the static build, then update reviewStatus to reviewed.</p>
        </section>
      </div>
    </div>
  );
}
