import { z } from "zod";

/**
 * Zod schemas for MDX control frontmatter.
 *
 * A control page is authored as a single `.mdx` file. The frontmatter carries
 * structured metadata (identity, taxonomy, difficulty, references, tags), and
 * the markdown body carries the educational narrative and code examples.
 *
 * The ASVS hierarchy is modeled explicitly:
 *   V1            -> chapter   (Encoding and Sanitization)
 *   V1.1          -> section   (Encoding and Sanitization Architecture)
 *   V1.1.1        -> control   (the individual requirement)
 */

const nonEmptyString = z.string().trim().min(1);

const slugSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Expected a lowercase kebab-case slug");

const chapterIdSchema = z
  .string()
  .regex(/^V\d+$/, "Expected a chapter id such as V1");

const sectionIdSchema = z
  .string()
  .regex(/^V\d+\.\d+$/, "Expected a section id such as V1.1");

const controlIdSchema = z
  .string()
  .regex(/^V\d+\.\d+\.\d+$/, "Expected a control id such as V1.1.1");

const canonicalIdSchema = z
  .string()
  .regex(/^v5\.0\.0-\d+\.\d+\.\d+$/, "Expected a canonical id such as v5.0.0-1.1.1");

export const DifficultySchema = z.enum(["foundational", "intermediate", "advanced"]);

export const ReviewStatusSchema = z.enum(["draft", "reviewed", "needs-update"]);

export const AsvsLevelSchema = z.union([z.literal(1), z.literal(2), z.literal(3)]);

export const ReferenceSchema = z.object({
  label: nonEmptyString,
  url: z.string().url(),
});

export const RelatedControlSchema = z.object({
  id: nonEmptyString,
  title: nonEmptyString,
  href: nonEmptyString,
});

export const CodeExampleMetaSchema = z.object({
  language: nonEmptyString,
  label: nonEmptyString,
  filename: nonEmptyString.optional(),
  secure: z.boolean().optional(),
});

export const ControlFrontmatterSchema = z
  .object({
    schemaVersion: z.string().default("1.0.0"),
    asvsVersion: z.string().default("5.0.0"),
    controlId: controlIdSchema,
    canonicalId: canonicalIdSchema.optional(),
    slug: slugSchema,
    title: nonEmptyString,
    summary: nonEmptyString,
    chapter: z.object({
      id: chapterIdSchema,
      title: nonEmptyString,
    }),
    section: z.object({
      id: sectionIdSchema,
      title: nonEmptyString,
    }),
    level: AsvsLevelSchema.default(1),
    tags: z.array(nonEmptyString).default([]),
    difficulty: DifficultySchema.default("foundational"),
    reviewStatus: ReviewStatusSchema.default("draft"),
    references: z.array(ReferenceSchema).default([]),
    relatedControls: z.array(RelatedControlSchema).default([]),
  })
  .superRefine((data, context) => {
    // Keep the taxonomy internally consistent. Everything is derived from the
    // control id so authors cannot accidentally mismatch chapter/section.
    const numericId = data.controlId.slice(1);
    const [chapterNumber, sectionNumber] = numericId.split(".");
    const expectedChapterId = `V${chapterNumber}`;
    const expectedSectionId = `V${chapterNumber}.${sectionNumber}`;
    const expectedCanonicalId = `v5.0.0-${numericId}`;

    if (data.chapter.id !== expectedChapterId) {
      context.addIssue({
        code: "custom",
        path: ["chapter", "id"],
        message: `Chapter id must be ${expectedChapterId} for control ${data.controlId}`,
      });
    }

    if (data.section.id !== expectedSectionId) {
      context.addIssue({
        code: "custom",
        path: ["section", "id"],
        message: `Section id must be ${expectedSectionId} for control ${data.controlId}`,
      });
    }

    if (data.canonicalId && data.canonicalId !== expectedCanonicalId) {
      context.addIssue({
        code: "custom",
        path: ["canonicalId"],
        message: `Canonical id must be ${expectedCanonicalId}`,
      });
    }
  });

export type ControlFrontmatter = z.infer<typeof ControlFrontmatterSchema>;
export type ControlReference = z.infer<typeof ReferenceSchema>;
export type ControlRelated = z.infer<typeof RelatedControlSchema>;
export type ControlCodeExampleMeta = z.infer<typeof CodeExampleMetaSchema>;
