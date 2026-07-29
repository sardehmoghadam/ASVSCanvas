import Link from "next/link";
import { ArrowRight, CheckCircle2, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { CategoryCard } from "@/components/cards";
import { DocsSection } from "@/components/docs-section";
import { SearchBox } from "@/components/search-box";
import { Button } from "@/components/ui/button";
import { categories } from "@/content/categories";
import { getControlsByCategory } from "@/content/controls";

const highlights = ["Static export ready", "Structured content model", "Accessible reusable components", "AI-assisted authoring workflow"];

export default function Home() {
  return (
    <div>





      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            </div>









            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Turn ASVS controls into practical engineering guidance.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                A static documentation portal for explanations, implementation patterns, testing notes, references, and multilingual code examples.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/categories/authentication/"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Explore controls <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/authoring/"
                className="inline-flex h-11 items-center justify-center rounded-xl border border-border bg-background px-5 text-sm font-medium transition hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Authoring guide
              </Link>
            </div>
            <div className="max-w-xl">
              <SearchBox />
            </div>
          </div>

          <div className="rounded-3xl border border-border/70 bg-card/90 p-6 shadow-glow backdrop-blur-sm">
            <div className="grid gap-4">




              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-border/60 bg-muted/50 p-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-medium leading-6">{item}</span>
                </div>
              ))}
            </div>



            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border p-5">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <p className="mt-3 text-2xl font-bold">4</p>
                <p className="text-sm text-muted-foreground">sample controls</p>
              </div>
              <div className="rounded-2xl border border-border p-5">
                <LockKeyhole className="h-6 w-6 text-primary" />
                <p className="mt-3 text-2xl font-bold">4.0.3</p>
                <p className="text-sm text-muted-foreground">ASVS version</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">




        <DocsSection
          eyebrow="Overview"
          title="Training sections"
          description="Start with categories, then drill into individual controls. The layout stays intentionally lightweight while the content library is still small."
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} count={getControlsByCategory(category.id).length} />
            ))}
          </div>




        </DocsSection>
      </section>
    </div>
  );
}

