import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ControlCard } from "@/components/cards";
import { DocsLayout } from "@/components/docs-layout";
import { TagFilter } from "@/components/tag-filter";
import { categories, getCategoryBySlug } from "@/content/categories";
import { getAllTags, getControlsByCategory } from "@/content/controls";

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  const controls = getControlsByCategory(category.id);

  return (
    <DocsLayout>
      <div className="grid gap-8 px-4 py-10 sm:px-8 xl:grid-cols-[1fr_240px]">
        <article>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.title }]} />
          <div className="mt-8">
            <p className="text-sm font-semibold text-primary">{category.id}</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight">{category.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{category.description}</p>
          </div>
          <div className="mt-8"><TagFilter tags={getAllTags()} /></div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {controls.map((control) => <ControlCard key={control.slug} control={control} />)}
          </div>
        </article>
      </div>
    </DocsLayout>
  );
}
