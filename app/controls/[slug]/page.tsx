import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Callout } from "@/components/callout";
import { CodeTabs } from "@/components/code-tabs";
import { DocsLayout } from "@/components/docs-layout";
import { ReferencesList } from "@/components/references-list";
import { RelatedControls } from "@/components/related-controls";
import { TableOfContents } from "@/components/table-of-contents";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/content/categories";
import { controls as legacyControls, getControlBySlug as getLegacyControl } from "@/content/controls";
import {
  getAllControls,
  getControlBySlug as getMdxControl,
  compileControl,
  type ControlEntry,
} from "@/lib/content/loader";
import { extractHeadings } from "@/lib/content/headings";
import { SITE_URL, buildOpenGraph } from "@/lib/site-config";

const toc = ["Explanation", "Why It Matters", "Examples", "Testing Notes", "References", "Related Controls"];

export function generateStaticParams() {
  const mdxSlugs = getAllControls().map((entry) => entry.frontmatter.slug);
  const legacySlugs = legacyControls.map((control) => control.slug);
  const allSlugs = [...new Set([...mdxSlugs, ...legacySlugs])];
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const mdxEntry = getMdxControl(slug);
  if (mdxEntry) {
    const { frontmatter } = mdxEntry;
    const url = `${SITE_URL}/controls/${slug}/`;
    return {
      title: frontmatter.title,
      description: `OWASP ASVS ${frontmatter.asvsVersion} control ${frontmatter.controlId}: ${frontmatter.summary}`,
      alternates: { canonical: url },
      openGraph: buildOpenGraph({
        title: frontmatter.title,
        description: frontmatter.summary,
        url,
      }),
    };
  }

  const control = getLegacyControl(slug);
  if (control) {
    const url = `${SITE_URL}/controls/${slug}/`;
    return {
      title: control.title,
      description: `OWASP ASVS ${control.asvsVersion} control ${control.controlId}: ${control.summary}`,
      alternates: { canonical: url },
      openGraph: buildOpenGraph({
        title: control.title,
        description: control.summary,
        url,
      }),
    };
  }

  return {};
}

/**
 * Renders an MDX-authored control page.
 * Falls back to the legacy structured-data controls array when no MDX file exists.
 */
async function renderMdxControl(entry: ControlEntry) {
  const compiled = await compileControl(entry);
  const { frontmatter } = compiled;
  const category = categories.find((c) => c.id === frontmatter.chapter.id);
  const allControls = getAllControls();
  const related = allControls
    .filter((e) => e.frontmatter.chapter.id === frontmatter.chapter.id && e.frontmatter.slug !== frontmatter.slug)
    .slice(0, 2);
  const headings = extractHeadings(entry.body);

  return (
    <DocsLayout>
      <div className="grid gap-8 px-4 py-10 sm:px-6 lg:px-0 xl:grid-cols-[minmax(0,1fr)_240px]">
        <article className="min-w-0 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              {
                label: category?.title ?? frontmatter.chapter.title,
                href: category ? `/categories/${category.slug}/` : undefined,
              },
              { label: frontmatter.controlId },
            ]}
          />
          <header className="mt-8 border-b border-border/70 pb-8">
            <div className="flex flex-wrap gap-2">
              <Badge>{frontmatter.controlId}</Badge>
              <Badge variant="outline">ASVS {frontmatter.asvsVersion}</Badge>
              <Badge variant="secondary">{frontmatter.difficulty}</Badge>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance">{frontmatter.title}</h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">{frontmatter.summary}</p>
          </header>

          {category?.isLegacy && category.migrationNote ? (
            <div className="mt-8">
              <Callout kind="warning" title="ASVS 4.0.3 legacy control">
                This control retains its original 4.0.3 identifier. {category.migrationNote}
              </Callout>
            </div>
          ) : null}

          <div className="mt-10 prose prose-slate max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-code:before:content-none prose-code:after:content-none">
            {compiled.content}
          </div>

          {frontmatter.references.length > 0 ? (
            <section id="references" className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold">References</h2>
              <ReferencesList references={frontmatter.references} />
            </section>
          ) : null}

          {related.length > 0 ? (
            <section id="related-controls" className="mt-10 space-y-4">
              <h2 className="text-2xl font-semibold">Related Controls</h2>
              <RelatedControls controls={related.map((e) => ({
                slug: e.frontmatter.slug,
                title: e.frontmatter.title,
                summary: e.frontmatter.summary,
              }))} />
            </section>
          ) : null}
        </article>
        <TableOfContents items={headings} />
      </div>
    </DocsLayout>
  );
}

export default async function ControlPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Try MDX first, then fall back to legacy structured data
  const mdxEntry = getMdxControl(slug);
  if (mdxEntry) {
    return renderMdxControl(mdxEntry);
  }

  // Fallback to legacy control
  const control = getLegacyControl(slug);
  if (!control) {
    notFound();
  }

  const category = categories.find(
    (item) => item.id === control.categoryId && item.asvsVersion === control.asvsVersion,
  );
  const related = legacyControls
    .filter(
      (item) =>
        item.categoryId === control.categoryId &&
        item.asvsVersion === control.asvsVersion &&
        item.slug !== control.slug,
    )
    .slice(0, 2);

  return (
    <DocsLayout>
      <div className="grid gap-8 px-4 py-10 sm:px-6 lg:px-0 xl:grid-cols-[minmax(0,1fr)_240px]">
        <article className="min-w-0 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              {
                label: category?.title ?? control.categoryId,
                href: category ? `/categories/${category.slug}/` : undefined,
              },
              { label: control.controlId },
            ]}
          />
          <header className="mt-8 border-b border-border/70 pb-8">
            <div className="flex flex-wrap gap-2">
              <Badge>{control.controlId}</Badge>
              <Badge variant="outline">ASVS {control.asvsVersion}</Badge>
              <Badge variant="secondary">{control.difficulty}</Badge>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance">{control.title}</h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">{control.summary}</p>
          </header>

          {category?.isLegacy && category.migrationNote ? (
            <div className="mt-8">
              <Callout kind="warning" title="ASVS 4.0.3 legacy control">
                This control retains its original 4.0.3 identifier. {category.migrationNote}
              </Callout>
            </div>
          ) : null}

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
            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
              {control.testingNotes.map((note) => <li key={note}>{note}</li>)}
            </ul>
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

