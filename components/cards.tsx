import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Category, Control, Section } from "@/types/content";

export function CategoryCard({ category, count }: { category: Category; count: number }) {
  return (
    <Link href={`/categories/${category.slug}/`} className="group block h-full">
      <Card className="h-full transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-lg group-focus-visible:ring-2 group-focus-visible:ring-ring">
        <CardHeader>
          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{category.id}</Badge>
              <Badge variant={category.isLegacy ? "secondary" : "outline"}>
                {category.asvsVersion}{category.isLegacy ? " legacy" : ""}
              </Badge>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </div>
          <CardTitle className="text-xl">{category.title}</CardTitle>
          <CardDescription>{category.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{count} controls</span>
          <span>Explore section</span>
        </CardContent>
      </Card>
    </Link>
  );
}

export function ControlCard({ control }: { control: Control }) {
  return (
    <Link href={`/controls/${control.slug}/`} className="group block h-full">
      <Card className="h-full transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-lg group-focus-visible:ring-2 group-focus-visible:ring-ring">
        <CardHeader>
          <div className="flex flex-wrap gap-2">
            <Badge>{control.controlId}</Badge>
            <Badge variant="outline">{control.difficulty}</Badge>
            <Badge variant="secondary">{control.reviewStatus}</Badge>
          </div>
          <CardTitle className="text-lg">{control.title}</CardTitle>
          <CardDescription>{control.summary}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {control.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </Link>
  );
}

export function SectionCard({ section, count }: { section: Section; count: number }) {
  return (
    <Link href={`/sections/${section.slug}/`} className="group block h-full">
      <Card className="h-full transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-lg group-focus-visible:ring-2 group-focus-visible:ring-ring">
        <CardHeader>
          <div className="flex items-center justify-between gap-3">
            <Badge>{section.id}</Badge>
            <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </div>
          <CardTitle className="text-xl">{section.title}</CardTitle>
          <CardDescription>{section.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{count} {count === 1 ? "control" : "controls"}</span>
          <span>Browse section</span>
        </CardContent>
      </Card>
    </Link>
  );
}
