import { SearchBox } from "@/components/search-box";
import { ControlCard } from "@/components/cards";
import { controls } from "@/content/controls";

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight">Search</h1>
      <p className="mt-3 text-muted-foreground">Placeholder UI for a future static search index powered by tags, titles, summaries, and references.</p>
      <div className="mt-8"><SearchBox /></div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {controls.map((control) => <ControlCard key={control.slug} control={control} />)}
      </div>
    </div>
  );
}
