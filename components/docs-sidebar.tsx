import Link from "next/link";
import { categories } from "@/content/categories";

export function DocsSidebar() {
  return (
    <aside className="hidden border-r border-border bg-muted/20 p-6 lg:block">
      <div className="sticky top-24 space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">ASVS Sections</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm">
            {categories.map((category) => (
              <Link key={category.id} className="rounded-lg px-3 py-2 hover:bg-accent" href={`/categories/${category.slug}/`}>
                {category.id} {category.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
