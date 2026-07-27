import Link from "next/link";

export function SearchBox({ compact = false }: { compact?: boolean }) {
  return (
    <label className="relative block">
      <span className="sr-only">Search controls</span>
      <input
        className={`w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground focus:ring-2 focus:ring-ring ${compact ? "h-10" : "h-12"}`}
        placeholder="Search controls, tags, references..."
        disabled
      />
      <Link href="/search/" aria-hidden className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-xs text-muted-foreground">
        Search
      </Link>
    </label>
  );
}
