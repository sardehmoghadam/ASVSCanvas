import type { Category } from "@/types/content";

export const categories: Category[] = [
  {
    id: "V2",
    slug: "authentication",
    title: "Authentication",
    description: "Identity proofing, credential handling, session binding, and authentication lifecycle controls.",
    icon: "Fingerprint",
    color: "teal",
  },
  {
    id: "V3",
    slug: "session-management",
    title: "Session Management",
    description: "Session token generation, rotation, storage, invalidation, and browser security expectations.",
    icon: "KeyRound",
    color: "cyan",
  },
  {
    id: "V5",
    slug: "validation-sanitization-encoding",
    title: "Validation, Sanitization & Encoding",
    description: "Data validation, contextual output encoding, injection resistance, and safe parsing patterns.",
    icon: "ShieldCheck",
    color: "emerald",
  },
  {
    id: "V7",
    slug: "error-logging",
    title: "Error Handling & Logging",
    description: "Actionable logging, safe error handling, monitoring signals, and audit trail quality.",
    icon: "FileWarning",
    color: "amber",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryById(id: string) {
  return categories.find((category) => category.id === id);
}
