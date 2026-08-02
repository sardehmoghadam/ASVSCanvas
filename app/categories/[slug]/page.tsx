import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Callout } from "@/components/callout";
import { ControlCard } from "@/components/cards";
import { DocsLayout } from "@/components/docs-layout";
import { Badge } from "@/components/ui/badge";
import { allCategories, getCategoryBySlug } from "@/content/categories";
import { getControlsByCategory } from "@/content/controls";

export function generateStaticParams() {
  return allCategories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryControls = getControlsByCategory(category.id, category.asvsVersion);

  return (
    <DocsLayout>
      <main className="px-4 py-10 sm:px-6 lg:px-0 lg:py-12">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: `ASVS ${category.asvsVersion}` },
            { label: `${category.id} ${category.title}` },
          ]}
        />

        <header className="mt-8 border-b border-border/70 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{category.id}</Badge>
            <Badge variant={category.isLegacy ? "secondary" : "outline"}>ASVS {category.asvsVersion}</Badge>
            {category.isLegacy ? <Badge variant="secondary">Legacy content</Badge> : null}
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">{category.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">{category.description}</p>
        </header>

        {category.isLegacy && category.migrationNote ? (
          <div className="mt-8">
            <Callout kind="warning" title="Legacy ASVS 4.0.3 URL">
              <p>{category.migrationNote}</p>
              <p className="mt-2">
                <Link className="font-semibold underline underline-offset-4" href="/categories/v5-encoding-sanitization/">
                  Browse the ASVS 5.0.0 chapters
                </Link>
              </p>
            </Callout>
          </div>
        ) : null}

        <section className="mt-10" aria-labelledby="chapter-controls">
          <h2 id="chapter-controls" className="text-2xl font-semibold tracking-tight">Chapter guidance</h2>
          {categoryControls.length > 0 ? (
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {categoryControls.map((control) => <ControlCard key={control.slug} control={control} />)}
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-border bg-muted/20 p-6">
              <p className="font-medium">No ASVS {category.asvsVersion} guidance has been published for this chapter yet.</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Chapter metadata is current. Existing 4.0.3 examples remain in the explicitly labeled legacy section and are not automatically mapped to this chapter.
              </p>
            </div>
          )}
        </section>

        {!category.isLegacy ? (
          <nav className="mt-10 border-t border-border/70 pt-6" aria-label="ASVS version selection">
            <p className="text-sm text-muted-foreground">
              Viewing <strong className="text-foreground">ASVS 5.0.0</strong>. Existing Academy examples are available under{" "}
              <Link className="font-medium text-primary underline underline-offset-4" href="/categories/authentication/">
                ASVS 4.0.3 legacy content
              </Link>.
            </p>
          </nav>
        ) : null}
      </main>
    </DocsLayout>
  );
}

