import Link from "next/link";
import { categories } from "@/content/categories";
import { cn } from "@/lib/utils";

export function DocsSidebar() {
  return (
    <aside className="hidden border-r border-border/70 bg-muted/10 px-4 py-6 lg:block">
      <div className="sticky top-24 space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">ASVS Sections</p>
          <nav className="mt-3 flex flex-col gap-1 text-sm" aria-label="Documentation sections">
            {categories.map((category) => (
              <Link
                key={category.id}
                className={cn(
                  "rounded-xl px-3 py-2 leading-6 text-muted-foreground transition hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
                )}
                href={`/categories/${category.slug}/`}
              >
                <span className="font-medium text-foreground/80">{category.id}</span> {category.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}
