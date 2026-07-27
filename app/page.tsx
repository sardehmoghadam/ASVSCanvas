import Link from "next/link";
import { ArrowRight, CheckCircle2, LockKeyhole, ShieldCheck, Sparkles } from "lucide-react";
import { CategoryCard } from "@/components/cards";
import { SearchBox } from "@/components/search-box";
import { Button } from "@/components/ui/button";
import { categories } from "@/content/categories";
import { getControlsByCategory } from "@/content/controls";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
              <Sparkles className="h-4 w-4" /> OWASP ASVS secure coding training
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
              Turn ASVS controls into practical engineering guidance.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              A static documentation portal for explanations, implementation patterns, testing notes, references, and multilingual code examples.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/categories/authentication/"><Button size="lg">Explore controls <ArrowRight className="h-4 w-4" /></Button></Link>
              <Link href="/authoring/"><Button size="lg" variant="outline">Authoring guide</Button></Link>
            </div>
            <div className="mt-8 max-w-xl"><SearchBox /></div>
          </div>
          <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-glow backdrop-blur">
            <div className="grid gap-4">
              {["Static export ready", "Structured content model", "Accessible reusable components", "AI-assisted authoring workflow"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-muted/60 p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border p-5"><ShieldCheck className="h-6 w-6 text-primary" /><p className="mt-3 text-2xl font-bold">4</p><p className="text-sm text-muted-foreground">sample controls</p></div>
              <div className="rounded-2xl border border-border p-5"><LockKeyhole className="h-6 w-6 text-primary" /><p className="mt-3 text-2xl font-bold">4.0.3</p><p className="text-sm text-muted-foreground">ASVS version</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Training Sections</h2>
            <p className="mt-2 text-muted-foreground">Start with categories, then drill into individual controls.</p>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => <CategoryCard key={category.id} category={category} count={getControlsByCategory(category.id).length} />)}
        </div>
      </section>
    </div>
  );
}
