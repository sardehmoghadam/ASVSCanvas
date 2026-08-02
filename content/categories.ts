import type { AsvsVersion, Category } from "@/types/content";

/** Official chapter metadata for OWASP ASVS 5.0.0. */
export const categories: Category[] = [
  {
    id: "V1",
    slug: "v5-encoding-sanitization",
    title: "Encoding and Sanitization",
    description: "Context-aware output encoding, sanitization, and safe handling of untrusted content.",
    icon: "Braces",
    color: "teal",
    asvsVersion: "5.0.0",
  },
  {
    id: "V2",
    slug: "v5-validation-business-logic",
    title: "Validation and Business Logic",
    description: "Input validation, business rule enforcement, workflow integrity, and anti-abuse controls.",
    icon: "ListChecks",
    color: "cyan",
    asvsVersion: "5.0.0",
  },
  {
    id: "V3",
    slug: "v5-web-frontend-security",
    title: "Web Frontend Security",
    description: "Browser-facing security controls for client-side code, content, and web platform features.",
    icon: "PanelsTopLeft",
    color: "blue",
    asvsVersion: "5.0.0",
  },
  {
    id: "V4",
    slug: "v5-api-web-service",
    title: "API and Web Service",
    description: "Security requirements for APIs, web services, endpoints, and service-to-service interfaces.",
    icon: "Webhook",
    color: "indigo",
    asvsVersion: "5.0.0",
  },
  {
    id: "V5",
    slug: "v5-file-handling",
    title: "File Handling",
    description: "Secure upload, storage, processing, download, and deletion of files and related metadata.",
    icon: "Files",
    color: "violet",
    asvsVersion: "5.0.0",
  },
  {
    id: "V6",
    slug: "v5-authentication",
    title: "Authentication",
    description: "Identity proofing, credential handling, authentication factors, and account lifecycle controls.",
    icon: "Fingerprint",
    color: "fuchsia",
    asvsVersion: "5.0.0",
  },
  {
    id: "V7",
    slug: "v5-session-management",
    title: "Session Management",
    description: "Session token generation, binding, renewal, expiration, storage, and invalidation.",
    icon: "KeyRound",
    color: "rose",
    asvsVersion: "5.0.0",
  },
  {
    id: "V8",
    slug: "v5-authorization",
    title: "Authorization",
    description: "Access control design and enforcement for data, functions, resources, and privileges.",
    icon: "ShieldCheck",
    color: "orange",
    asvsVersion: "5.0.0",
  },
  {
    id: "V9",
    slug: "v5-self-contained-tokens",
    title: "Self-contained Tokens",
    description: "Secure creation, validation, use, and lifecycle management of self-contained tokens.",
    icon: "TicketCheck",
    color: "amber",
    asvsVersion: "5.0.0",
  },
  {
    id: "V10",
    slug: "v5-oauth-oidc",
    title: "OAuth and OIDC",
    description: "Secure OAuth 2.0 and OpenID Connect roles, flows, tokens, clients, and providers.",
    icon: "BadgeCheck",
    color: "yellow",
    asvsVersion: "5.0.0",
  },
  {
    id: "V11",
    slug: "v5-cryptography",
    title: "Cryptography",
    description: "Approved cryptographic algorithms, key management, randomness, and secret protection.",
    icon: "Binary",
    color: "lime",
    asvsVersion: "5.0.0",
  },
  {
    id: "V12",
    slug: "v5-secure-communication",
    title: "Secure Communication",
    description: "Transport security, trusted connections, certificate validation, and communication integrity.",
    icon: "LockKeyhole",
    color: "emerald",
    asvsVersion: "5.0.0",
  },
];

/**
 * Existing Academy content authored against ASVS 4.0.3.
 * These routes remain available, but are intentionally not remapped to v5 IDs.
 */
export const legacyCategories: Category[] = [
  {
    id: "V2",
    slug: "authentication",
    title: "Authentication",
    description: "Legacy identity proofing, credential handling, and authentication lifecycle guidance.",
    icon: "Fingerprint",
    color: "teal",
    asvsVersion: "4.0.3",
    isLegacy: true,
    migrationNote: "This URL contains ASVS 4.0.3 V2 content. In ASVS 5.0.0, Authentication is V6; review the new V6 chapter rather than treating this content as automatically migrated.",
  },
  {
    id: "V3",
    slug: "session-management",
    title: "Session Management",
    description: "Legacy session token generation, rotation, storage, invalidation, and browser security guidance.",
    icon: "KeyRound",
    color: "cyan",
    asvsVersion: "4.0.3",
    isLegacy: true,
    migrationNote: "This URL contains ASVS 4.0.3 V3 content. In ASVS 5.0.0, Session Management is V7; review the new V7 chapter rather than treating this content as automatically migrated.",
  },
  {
    id: "V5",
    slug: "validation-sanitization-encoding",
    title: "Validation, Sanitization and Encoding",
    description: "Legacy data validation, output encoding, injection resistance, and safe parsing guidance.",
    icon: "ShieldCheck",
    color: "emerald",
    asvsVersion: "4.0.3",
    isLegacy: true,
    migrationNote: "This URL contains ASVS 4.0.3 V5 content. ASVS 5.0.0 V5 is File Handling; encoding and sanitization moved to V1, while validation and business logic are covered by V2.",
  },
  {
    id: "V7",
    slug: "error-logging",
    title: "Error Handling and Logging",
    description: "Legacy safe error handling, monitoring signals, audit trails, and actionable logging guidance.",
    icon: "FileWarning",
    color: "amber",
    asvsVersion: "4.0.3",
    isLegacy: true,
    migrationNote: "This URL contains ASVS 4.0.3 V7 content. It has no direct chapter-number mapping in ASVS 5.0.0 and must be reviewed before migration.",
  },
];

export const allCategories: Category[] = [...categories, ...legacyCategories];

export function getCategoryBySlug(slug: string) {
  return allCategories.find((category) => category.slug === slug);
}

export function getCategoryById(id: string, asvsVersion: AsvsVersion = "5.0.0") {
  return allCategories.find((category) => category.id === id && category.asvsVersion === asvsVersion);
}
