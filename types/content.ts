export type Difficulty = "foundational" | "intermediate" | "advanced";
export type ReviewStatus = "draft" | "reviewed" | "needs-update";
export type AsvsVersion = "4.0.3" | "5.0.0";

export type CodeExample = {
  language: string;
  label: string;
  filename?: string;
  code: string;
  secure?: boolean;
};

export type Reference = {
  label: string;
  url: string;
};

export type RelatedControl = {
  id: string;
  title: string;
  href: string;
};

export type Control = {
  asvsVersion: string;
  categoryId: string;
  controlId: string;
  slug: string;
  title: string;
  summary: string;
  explanation: string;
  whyItMatters: string;
  insecureExample: string;
  secureGuidance: string;
  codeExamples: CodeExample[];
  testingNotes: string[];
  references: Reference[];
  tags: string[];
  difficulty: Difficulty;
  reviewStatus: ReviewStatus;
  relatedControls: RelatedControl[];
};

export type Section = {
  id: string;
  slug: string;
  title: string;
  description: string;
  chapterId: string;
  asvsVersion: AsvsVersion;
};

export type Category = {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  asvsVersion: AsvsVersion;
  isLegacy?: boolean;
  migrationNote?: string;
};
