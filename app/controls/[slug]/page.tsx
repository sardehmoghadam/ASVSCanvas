import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Callout } from "@/components/callout";
import { CodeTabs } from "@/components/code-tabs";
import { DocsLayout } from "@/components/docs-layout";
import { ReferencesList } from "@/components/references-list";
import { RelatedControls } from "@/components/related-controls";
import { TableOfContents } from "@/components/table-of-contents";
import { Badge } from "@/components/ui/badge";
import { getCategoryById } from "@/content/categories";
import { controls, getControlBySlug } from "@/content/controls";

const toc = ["Explanation", "Why It Matters", "Examples", "Testing Notes", "References", "Related Controls"];

export function generateStaticParams() {
  return controls.map((control) => ({ slug: control.slug }));
}

export default async function ControlPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const control = getControlBySlug(slug);
  if (!control) notFound();
  const category = getCategoryById(control.categoryId);
  const related = controls.filter((item) => item.categoryId === control.categoryId && item.slug !== control.slug).slice(0, 2);

  return (
    <DocsLayout>
      <div className="grid gap-8 px-4 py-10 sm:px-8 xl:grid-cols-[1fr_240px]">
        <article className="max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category?.title ?? control.categoryId, href: category ? `/categories/${category.slug}/` : undefined }, { label: control.controlId }]} />
          <header className="mt-8 border-b border-border pb-8">
            <div className="flex flex-wrap gap-2"><Badge>{control.controlId}</Badge><Badge variant="outline">ASVS {control.asvsVersion}</Badge><Badge variant="secondary">{control.difficulty}</Badge></div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight">{control.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{control.summary}</p>
          </header>
          <section id="explanation" className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">Explanation</h2>
            <p className="leading-7 text-muted-foreground">{control.explanation}</p>
            <Callout kind="warning" title="Common insecure pattern">{control.insecureExample}</Callout>
          </section>
          <section id="why-it-matters" className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">Why It Matters</h2>
            <p className="leading-7 text-muted-foreground">{control.whyItMatters}</p>
            <Callout kind="secure" title="Secure practice">{control.secureGuidance}</Callout>
          </section>
          <section id="examples" className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">Examples</h2>
            <CodeTabs examples={control.codeExamples} />
          </section>
          <section id="testing-notes" className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">Testing Notes</h2>
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">{control.testingNotes.map((note) => <li key={note}>{note}</li>)}</ul>
          </section>
          <section id="references" className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">References</h2>
            <ReferencesList references={control.references} />
          </section>
          <section id="related-controls" className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">Related Controls</h2>
            <RelatedControls controls={related} />
          </section>
        </article>
        <TableOfContents items={toc} />
      </div>
    </DocsLayout>
  );
}
