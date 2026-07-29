import Link from "next/link";

export function SearchBox({ compact = false }: { compact?: boolean }) {
  return (
    <label className="relative block">
      <span className="sr-only">Search controls</span>
      <input
        className={`w-full rounded-2xl border border-border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:ring-2 focus:ring-ring ${compact ? "h-10" : "h-12"}`}
        placeholder="Search controls, tags, references..."
        disabled
      />
      <Link href="/search/" className="absolute inset-y-0 right-3 flex items-center rounded-full px-3 text-xs font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring">
        Search
      </Link>
    </label>
  );
}
