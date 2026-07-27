export function TableOfContents({ items }: { items: string[] }) {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24 rounded-xl border border-border bg-card p-5 text-sm">
        <p className="font-semibold">On this page</p>
        <nav className="mt-3 flex flex-col gap-2 text-muted-foreground">
          {items.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} className="hover:text-foreground">
              {item}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
