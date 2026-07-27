import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { CodeExample } from "@/types/content";

export function CodeTabs({ examples }: { examples: CodeExample[] }) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {examples.map((example) => (
          <Badge key={example.language} variant={example.secure ? "default" : "outline"}>
            {example.label}
          </Badge>
        ))}
      </div>
      <div className="grid gap-4">
        {examples.map((example) => (
          <Card key={`${example.language}-${example.filename ?? "code"}`}>
            <CardHeader>
              <CardTitle className="text-base">{example.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-slate-100 dark:bg-slate-900">
                <code>{example.code}</code>
              </pre>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
