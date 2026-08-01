import { z } from "zod";
import type { Category, CodeExample, Control, Difficulty, Reference, RelatedControl, ReviewStatus } from "@/types/content";

const nonEmptyString = z.string().trim().min(1);
const slugSchema = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Expected a lowercase kebab-case slug");

export const DifficultySchema: z.ZodType<Difficulty> = z.enum(["foundational", "intermediate", "advanced"]);
export const ReviewStatusSchema: z.ZodType<ReviewStatus> = z.enum(["draft", "reviewed", "needs-update"]);
export const AsvsLevelSchema = z.union([z.literal(1), z.literal(2), z.literal(3)]);
export const PublicationStatusSchema = z.enum(["draft", "in-review", "published", "archived"]);

export const ReferenceSchema: z.ZodType<Reference> = z.object({
  label: nonEmptyString,
  url: z.string().url(),
});

export const RelatedControlSchema: z.ZodType<RelatedControl> = z.object({
  id: nonEmptyString,
  title: nonEmptyString,
  href: nonEmptyString,
});

export const CodeExampleSchema: z.ZodType<CodeExample> = z.object({
  language: nonEmptyString,
  label: nonEmptyString,
  filename: nonEmptyString.optional(),
  code: z.string().min(1),
  secure: z.boolean().optional(),
});

/** Runtime schema for the original content model. Existing controls remain valid. */
export const ControlSchema: z.ZodType<Control> = z.object({
  asvsVersion: nonEmptyString,
  categoryId: nonEmptyString,
  controlId: nonEmptyString,
  slug: slugSchema,
  title: nonEmptyString,
  summary: nonEmptyString,
  explanation: nonEmptyString,
  whyItMatters: nonEmptyString,
  insecureExample: nonEmptyString,
  secureGuidance: nonEmptyString,
  codeExamples: z.array(CodeExampleSchema),
  testingNotes: z.array(nonEmptyString),
  references: z.array(ReferenceSchema),
  tags: z.array(nonEmptyString),
  difficulty: DifficultySchema,
  reviewStatus: ReviewStatusSchema,
  relatedControls: z.array(RelatedControlSchema),
});

export const CategorySchema: z.ZodType<Category> = z.object({
  id: nonEmptyString,
  slug: slugSchema,
  title: nonEmptyString,
  description: nonEmptyString,
  icon: nonEmptyString,
  color: nonEmptyString,
});

const controlIdSchema = z.string().regex(/^V\d+\.\d+\.\d+$/, "Expected an ASVS control ID such as V5.2.2");
const canonicalIdSchema = z.string().regex(/^v5\.0\.0-\d+\.\d+\.\d+$/, "Expected a canonical ID such as v5.0.0-5.2.2");
const chapterIdSchema = z.string().regex(/^V\d+$/, "Expected a chapter ID such as V5");
const sectionIdSchema = z.string().regex(/^V\d+\.\d+$/, "Expected a section ID such as V5.2");

export const AsvsChapterSchema = z.object({
  id: chapterIdSchema,
  title: nonEmptyString,
});

export const AsvsSectionSchema = z.object({
  id: sectionIdSchema,
  title: nonEmptyString,
});

export const OfficialRequirementSchema = z.object({
  text: nonEmptyString,
  level: AsvsLevelSchema,
});

export const InsecurePatternSchema = z.object({
  title: nonEmptyString,
  description: nonEmptyString,
  codeExamples: z.array(CodeExampleSchema),
});

export const SecurePracticeSchema = z.object({
  title: nonEmptyString,
  description: nonEmptyString,
  codeExamples: z.array(CodeExampleSchema),
});

export const LanguageGuidanceSchema = z.object({
  language: nonEmptyString,
  guidance: nonEmptyString,
  codeExamples: z.array(CodeExampleSchema),
});

export const FrameworkGuidanceSchema = z.object({
  framework: nonEmptyString,
  languages: z.array(nonEmptyString).min(1),
  guidance: nonEmptyString,
  codeExamples: z.array(CodeExampleSchema),
});

export const EducationalContentSchema = z.object({
  summary: nonEmptyString,
  explanation: nonEmptyString,
  whyItMatters: nonEmptyString,
  insecurePatterns: z.array(InsecurePatternSchema),
  securePractices: z.array(SecurePracticeSchema),
  codeExamples: z.array(CodeExampleSchema),
  testingNotes: z.array(nonEmptyString),
  languages: z.array(LanguageGuidanceSchema),
  frameworks: z.array(FrameworkGuidanceSchema),
});

/**
 * Versioned ASVS 5.0.0 model. Official requirement data is isolated from the
 * educational material so editorial changes cannot alter the quoted standard.
 */
export const AsvsV5ControlSchema = z
  .object({
    schemaVersion: z.literal("1.0.0"),
    asvsVersion: z.literal("5.0.0"),
    controlId: controlIdSchema,
    canonicalId: canonicalIdSchema,
    slug: slugSchema,
    title: nonEmptyString,
    official: z.object({
      chapter: AsvsChapterSchema,
      section: AsvsSectionSchema,
      requirement: OfficialRequirementSchema,
    }),
    education: EducationalContentSchema,
    references: z.array(ReferenceSchema),
    relatedControls: z.array(RelatedControlSchema),
    tags: z.array(nonEmptyString),
    publicationStatus: PublicationStatusSchema,
  })
  .superRefine((control, context) => {
    const numericId = control.controlId.slice(1);
    const segments = numericId.split(".");
    const expectedCanonicalId = `v5.0.0-${numericId}`;
    const expectedChapterId = `V${segments[0]}`;
    const expectedSectionId = `${expectedChapterId}.${segments[1]}`;

    if (control.canonicalId !== expectedCanonicalId) {
      context.addIssue({
        code: "custom",
        path: ["canonicalId"],
        message: `Canonical ID must be ${expectedCanonicalId}`,
      });
    }

    if (control.official.chapter.id !== expectedChapterId) {
      context.addIssue({
        code: "custom",
        path: ["official", "chapter", "id"],
        message: `Chapter ID must be ${expectedChapterId}`,
      });
    }

    if (control.official.section.id !== expectedSectionId) {
      context.addIssue({
        code: "custom",
        path: ["official", "section", "id"],
        message: `Section ID must be ${expectedSectionId}`,
      });
    }
  });

export const CompatibleControlSchema = z.union([ControlSchema, AsvsV5ControlSchema]);

export type AsvsLevel = z.infer<typeof AsvsLevelSchema>;
export type PublicationStatus = z.infer<typeof PublicationStatusSchema>;
export type AsvsChapter = z.infer<typeof AsvsChapterSchema>;
export type AsvsSection = z.infer<typeof AsvsSectionSchema>;
export type OfficialRequirement = z.infer<typeof OfficialRequirementSchema>;
export type InsecurePattern = z.infer<typeof InsecurePatternSchema>;
export type SecurePractice = z.infer<typeof SecurePracticeSchema>;
export type LanguageGuidance = z.infer<typeof LanguageGuidanceSchema>;
export type FrameworkGuidance = z.infer<typeof FrameworkGuidanceSchema>;
export type EducationalContent = z.infer<typeof EducationalContentSchema>;
export type AsvsV5Control = z.infer<typeof AsvsV5ControlSchema>;
export type CompatibleControl = z.infer<typeof CompatibleControlSchema>;

export function parseControl(raw: unknown): Control {
  return ControlSchema.parse(raw);
}

export function parseAsvsV5Control(raw: unknown): AsvsV5Control {
  return AsvsV5ControlSchema.parse(raw);
}

export function safeParseAsvsV5Control(raw: unknown) {
  return AsvsV5ControlSchema.safeParse(raw);
}

export function parseCompatibleControl(raw: unknown): CompatibleControl {
  return CompatibleControlSchema.parse(raw);
}

export function parseControls(raw: unknown): Control[] {
  return z.array(ControlSchema).parse(raw);
}

export function parseAsvsV5Controls(raw: unknown): AsvsV5Control[] {
  return z.array(AsvsV5ControlSchema).parse(raw);
}