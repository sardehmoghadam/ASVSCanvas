import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 text-sm text-muted-foreground sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-semibold text-foreground">ASVS Academy</p>
          <p className="mt-2 max-w-sm">Static-first training portal for secure coding teams, reviewers, and application security programs.</p>
        </div>
        <div>
          <p className="font-medium text-foreground">Learn</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link href="/categories/authentication/">ASVS Categories</Link>
            <Link href="/controls/password-storage/">Control Template</Link>
          </div>
        </div>
        <div>
          <p className="font-medium text-foreground">Content</p>
          <p className="mt-3">Structured TypeScript content files keep training material separate from presentation.</p>
        </div>
      </div>
    </footer>
  );
}
