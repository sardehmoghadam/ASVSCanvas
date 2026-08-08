import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ControlCard } from "@/components/cards";
import { DocsLayout } from "@/components/docs-layout";
import { Badge } from "@/components/ui/badge";
import { categories, getCategoryBySlug } from "@/content/categories";
import { getControlsByCategory } from "@/content/controls";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
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
            <Badge variant="outline">ASVS {category.asvsVersion}</Badge>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">{category.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">{category.description}</p>
        </header>

        <section className="mt-10" aria-labelledby="chapter-controls">
          <h2 id="chapter-controls" className="text-2xl font-semibold tracking-tight">Chapter lessons</h2>
          {categoryControls.length > 0 ? (
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {categoryControls.map((control) => <ControlCard key={control.slug} control={control} />)}
            </div>
          ) : (
            <div className="mt-5 rounded-2xl border border-dashed border-border bg-muted/20 p-6">
              <p className="font-medium">No lessons have been published for {category.id} {category.title} yet.</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                This chapter is part of the official OWASP ASVS 5.0.0 structure. Training material, examples, and testing notes will be added as authoring progresses.
              </p>
            </div>
          )}
        </section>
      </main>
    </DocsLayout>
  );
}

