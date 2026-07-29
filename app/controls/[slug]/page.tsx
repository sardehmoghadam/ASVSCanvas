import { SearchBox } from "@/components/search-box";
import { ControlCard } from "@/components/cards";
import { DocsSection } from "@/components/docs-section";
import { controls } from "@/content/controls";

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Search</p>
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">Browse the sample content library</h1>
        <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
          Placeholder UI for a future static search index powered by tags, titles, summaries, and references.
        </p>
      </div>
      <div className="mt-8 max-w-2xl">
        <SearchBox />
      </div>
      <DocsSection
        title="Suggested controls"
        description="These cards keep the current sample content visible until the actual static search experience is added."
        className="mt-12"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {controls.map((control) => (
            <ControlCard key={control.slug} control={control} />
          ))}
        </div>
      </DocsSection>
    </div>
  );
}
