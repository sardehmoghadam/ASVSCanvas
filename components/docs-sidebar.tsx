import Link from "next/link";
import { categories, legacyCategories } from "@/content/categories";
import { cn } from "@/lib/utils";

const linkStyles = cn(
  "rounded-xl px-3 py-2 leading-6 text-muted-foreground transition",
  "hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
);

function ChapterLinks() {
  return (
    <nav className="mt-3 flex flex-col gap-1 text-sm" aria-label="ASVS 5.0.0 chapters">
      {categories.map((category) => (
        <Link key={category.id} className={linkStyles} href={`/categories/${category.slug}/`}>
          <span className="font-medium text-foreground/80">{category.id}</span> {category.title}
        </Link>
      ))}
    </nav>
  );
}

export function DocsSidebar() {
  return (
    <aside className="border-b border-border/70 bg-muted/10 px-4 py-4 lg:border-b-0 lg:border-r lg:py-6">
      <div className="lg:sticky lg:top-24 lg:space-y-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">ASVS chapters</p>
          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">5.0.0</span>
        </div>

        <details className="mt-3 lg:hidden">
          <summary className="cursor-pointer rounded-xl border border-border bg-background px-3 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Browse ASVS 5.0.0 chapters
          </summary>
          <ChapterLinks />
        </details>

        <div className="hidden lg:block">
          <ChapterLinks />
        </div>

        <details id="legacy-asvs" className="mt-4 border-t border-border/70 pt-4 lg:mt-6">
          <summary className="cursor-pointer text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            ASVS 4.0.3 legacy
          </summary>
          <nav className="mt-3 flex flex-col gap-1 text-sm" aria-label="Legacy ASVS 4.0.3 categories">
            {legacyCategories.map((category) => (
              <Link key={`${category.asvsVersion}-${category.id}`} className={linkStyles} href={`/categories/${category.slug}/`}>
                <span className="font-medium text-foreground/80">{category.id}</span> {category.title}
                <span className="ml-1 text-xs">(legacy)</span>
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </aside>
  );
}
