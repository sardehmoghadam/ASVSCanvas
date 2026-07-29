import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-muted/20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-muted-foreground sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-semibold text-foreground">ASVS Academy</p>
          <p className="mt-2 max-w-sm leading-6">Static-first training portal for secure coding teams, reviewers, and application security programs.</p>
        </div>
        <div>
          <p className="font-semibold text-foreground">Learn</p>
          <div className="mt-3 flex flex-col gap-2">
            <Link className="transition hover:text-foreground" href="/categories/authentication/">ASVS Categories</Link>
            <Link className="transition hover:text-foreground" href="/controls/password-storage/">Control Template</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-foreground">Content</p>
          <p className="mt-3 leading-6">Structured TypeScript content files keep training material separate from presentation.</p>
        </div>
      </div>
    </footer>
  );
}
