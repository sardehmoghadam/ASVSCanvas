import { DocsSidebar } from "@/components/docs-sidebar";

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid max-w-7xl lg:grid-cols-[280px_1fr]">
      <DocsSidebar />
      {children}
    </div>
  );
}
