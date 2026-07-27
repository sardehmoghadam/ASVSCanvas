import Link from "next/link";
import { Shield } from "lucide-react";
import { SearchBox } from "@/components/search-box";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
            <Shield className="h-5 w-5" />
          </span>
          <span>ASVS Academy</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link className="hover:text-foreground" href="/categories/authentication/">Controls</Link>
          <Link className="hover:text-foreground" href="/authoring/">Authoring</Link>
        </nav>
        <div className="ml-auto hidden w-full max-w-sm md:block">
          <SearchBox compact />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
