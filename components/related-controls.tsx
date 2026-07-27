import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Control } from "@/types/content";

export function RelatedControls({ controls }: { controls: Control[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {controls.map((control) => (
        <Link key={control.slug} href={`/controls/${control.slug}/`}>
          <Card className="h-full transition hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-base">{control.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{control.summary}</CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
