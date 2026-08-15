import { getAllControls } from "./content/loader";

/**
 * A lightweight, fully-serializable record for one searchable control.
 *
 * `searchText` is a precomputed, lowercased haystack that the client searches
 * against, so filtering 300+ controls stays instant without any JSON juggling
 * at query time.
 */
export type SearchEntry = {
  href: string;
  controlId: string;
  title: string;
  summary: string;
  chapterId: string;
  chapterTitle: string;
  sectionId: string;
  sectionTitle: string;
  level: 1 | 2 | 3;
  difficulty: string;
  reviewStatus: string;
  tags: string[];
  references: string[];
  searchText: string;
};

function parseControlId(id: string): [number, number, number] {
  const parts = id.slice(1).split(".").map((part) => Number.parseInt(part, 10));
  return [parts[0] ?? 0, parts[1] ?? 0, parts[2] ?? 0];
}

/** Natural ordering for ids like V1.1.1 … V17.2.3 (V10 must follow V9). */
export function compareControlIds(a: string, b: string): number {
  const [aChapter, aSection, aControl] = parseControlId(a);
  const [bChapter, bSection, bControl] = parseControlId(b);
  return aChapter - bChapter || aSection - bSection || aControl - bControl;
}

/**
 * Builds the static search index from the MDX control corpus.
 *
 * Runs at build time only (server-side). Every field the user can search —
 * id, slug, title, summary, chapter, section, level, difficulty, status,
 * tags, references and related controls — is folded into `searchText`.
 */
export function buildSearchIndex(): SearchEntry[] {
  return getAllControls()
    .map((entry) => {
      const fm = entry.frontmatter;
      const references = fm.references.map((ref) => ref.label);

      const searchText = [
        fm.controlId,
        fm.canonicalId ?? "",
        fm.slug,
        fm.title,
        fm.summary,
        fm.chapter.id,
        fm.chapter.title,
        fm.section.id,
        fm.section.title,
        `level ${fm.level}`,
        `asvs level ${fm.level}`,
        fm.difficulty,
        fm.reviewStatus,
        ...fm.tags,
        ...references,
        ...fm.relatedControls.map((rc) => `${rc.id} ${rc.title}`),
      ]
        .join(" ")
        .toLowerCase();

      return {
        href: `/controls/${fm.slug}/`,
        controlId: fm.controlId,
        title: fm.title,
        summary: fm.summary,
        chapterId: fm.chapter.id,
        chapterTitle: fm.chapter.title,
        sectionId: fm.section.id,
        sectionTitle: fm.section.title,
        level: fm.level,
        difficulty: fm.difficulty,
        reviewStatus: fm.reviewStatus,
        tags: fm.tags,
        references,
        searchText,
      };
    })
    .sort((a, b) => compareControlIds(a.controlId, b.controlId));
}
