import type { Section } from "@/types/content";

/**
 * ASVS 5.0.0 sections organized by chapter.
 *
 * Hierarchy: Chapter (V1-V12) â†’ Section (V1.1, V1.2, â€¦) â†’ Requirement (V1.1.1, â€¦)
 *
 * Each section belongs to one chapter via `chapterId`. Sections that have authored
 * controls (legacy or MDX) are listed first per chapter; remaining sections use
 * realistic ASVS section names.
 */
export const sections: Section[] = [
  // â”€â”€ V1: Encoding and Sanitization â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "V1.1",
    slug: "v1-1-encoding-sanitization-architecture",
    title: "Encoding and Sanitization Architecture",
    description:
      "Foundational patterns for secure encoding, canonicalization, and sanitization before output.",
    chapterId: "V1",
    asvsVersion: "5.0.0",
  },
  {
    id: "V1.2",
    slug: "v1-2-output-encoding",
    title: "Context-Aware Output Encoding",
    description:
      "Applying the correct encoding for HTML, CSS, JavaScript, URL, and other output contexts.",
    chapterId: "V1",
    asvsVersion: "5.0.0",
  },
  {
    id: "V1.3",
    slug: "v1-3-sanitization",
    title: "HTML Sanitization and Markup",
    description:
      "Safe handling of rich-text inputs, markup filtering, and defense-in-depth against markup injection.",
    chapterId: "V1",
    asvsVersion: "5.0.0",
  },
  {
    id: "V1.4",
    slug: "v1-4-deserialization",
    title: "Safe Deserialization",
    description:
      "Preventing code execution, type confusion, and injection attacks through deserialization of untrusted data.",
    chapterId: "V1",
    asvsVersion: "5.0.0",
  },

  // â”€â”€ V2: Validation and Business Logic â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "V2.1",
    slug: "v2-1-input-validation",
    title: "Input Validation Strategy",
    description:
      "Allowlist-based validation, canonicalization, type checking, and length enforcement for all inputs.",
    chapterId: "V2",
    asvsVersion: "5.0.0",
  },
  {
    id: "V2.2",
    slug: "v2-2-business-logic-validation",
    title: "Business Logic Validation",
    description:
      "Consistency checks, business rules, transaction limits, and workflow state validation.",
    chapterId: "V2",
    asvsVersion: "5.0.0",
  },
  {
    id: "V2.3",
    slug: "v2-3-anti-automation",
    title: "Anti-Automation Controls",
    description:
      "CAPTCHA, rate limiting, account lockout, and bot mitigation techniques.",
    chapterId: "V2",
    asvsVersion: "5.0.0",
  },
  {
    id: "V2.4",
    slug: "v2-4-workflow-integrity",
    title: "Workflow Integrity",
    description:
      "Enforcing step order, preventing skipping, and maintaining transaction atomicity.",
    chapterId: "V2",
    asvsVersion: "5.0.0",
  },

  // â”€â”€ V3: Web Frontend Security â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "V3.1",
    slug: "v3-1-csp",
    title: "Content Security Policy",
    description:
      "Defining and enforcing CSP headers to mitigate XSS, clickjacking, and code injection.",
    chapterId: "V3",
    asvsVersion: "5.0.0",
  },
  {
    id: "V3.2",
    slug: "v3-2-cross-origin-security",
    title: "Cross-Origin Security",
    description:
      "CORS configuration, cross-origin isolation, and same-origin policy enforcement.",
    chapterId: "V3",
    asvsVersion: "5.0.0",
  },
  {
    id: "V3.3",
    slug: "v3-3-client-side-storage",
    title: "Client-Side Storage",
    description:
      "Secure use of localStorage, sessionStorage, IndexedDB, and cookies in browser applications.",
    chapterId: "V3",
    asvsVersion: "5.0.0",
  },
  {
    id: "V3.4",
    slug: "v3-4-web-messaging",
    title: "Web Messaging",
    description:
      "Safe postMessage origin checks, message validation, and port isolation.",
    chapterId: "V3",
    asvsVersion: "5.0.0",
  },
// â”€â”€ V4: API and Web Service â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "V4.1",
    slug: "v4-1-api-authentication",
    title: "API Authentication",
    description: "API keys, service accounts, machine-to-machine authentication, and token management.",
    chapterId: "V4",
    asvsVersion: "5.0.0",
  },
  {
    id: "V4.2",
    slug: "v4-2-api-authorization",
    title: "API Authorization",
    description: "Scoped access, least privilege, resource-level permissions, and role-based access for APIs.",
    chapterId: "V4",
    asvsVersion: "5.0.0",
  },
  {
    id: "V4.3",
    slug: "v4-3-api-input-validation",
    title: "API Input and Schema Validation",
    description: "Schema validation, content-type enforcement, parameter validation, and request size limits.",
    chapterId: "V4",
    asvsVersion: "5.0.0",
  },
  {
    id: "V4.4",
    slug: "v4-4-api-rate-limiting",
    title: "API Rate Limiting and Throttling",
    description: "Preventing abuse through rate limiting, quota enforcement, and backpressure strategies.",
    chapterId: "V4",
    asvsVersion: "5.0.0",
  },

  // â”€â”€ V5: File Handling â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "V5.1",
    slug: "v5-1-file-upload-validation",
    title: "File Upload Validation",
    description: "Type verification, content inspection, metadata scanning, and malware detection for uploaded files.",
    chapterId: "V5",
    asvsVersion: "5.0.0",
  },
  {
    id: "V5.2",
    slug: "v5-2-file-storage",
    title: "File Storage Security",
    description: "Secure storage paths, access controls, encryption, and backup procedures for stored files.",
    chapterId: "V5",
    asvsVersion: "5.0.0",
  },
  {
    id: "V5.3",
    slug: "v5-3-file-download-controls",
    title: "File Download Controls",
    description: "Safe file serving, content-type headers, download authorization, and filename validation.",
    chapterId: "V5",
    asvsVersion: "5.0.0",
  },
  {
    id: "V5.4",
    slug: "v5-4-file-processing",
    title: "File Processing and Conversion",
    description: "Secure processing of images, documents, archives, and other file formats on the server.",
    chapterId: "V5",
    asvsVersion: "5.0.0",
  },

  // â”€â”€ V6: Authentication â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "V6.1",
    slug: "v6-1-credential-storage",
    title: "Credential Storage and Management",
    description: "Password hashing, key derivation, credential lifecycle, and secure password reset flows.",
    chapterId: "V6",
    asvsVersion: "5.0.0",
  },
  {
    id: "V6.2",
    slug: "v6-2-anti-automation",
    title: "Authentication Anti-Automation",
    description: "Brute-force protection, account lockout, CAPTCHA, and credential-stuffing defenses.",
    chapterId: "V6",
    asvsVersion: "5.0.0",
  },
  {
    id: "V6.3",
    slug: "v6-3-mfa",
    title: "Multi-Factor Authentication",
    description: "MFA enrollment, token generation, verification, recovery codes, and bypass prevention.",
    chapterId: "V6",
    asvsVersion: "5.0.0",
  },
  {
    id: "V6.4",
    slug: "v6-4-account-lifecycle",
    title: "Account Lifecycle",
    description: "Registration, email verification, password change, account recovery, and decommissioning.",
    chapterId: "V6",
    asvsVersion: "5.0.0",
  },

  // â”€â”€ V7: Session Management â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "V7.1",
    slug: "v7-1-session-creation",
    title: "Session Creation and Binding",
    description: "Session identifier generation, server-side binding, and secure session initialization.",
    chapterId: "V7",
    asvsVersion: "5.0.0",
  },
  {
    id: "V7.2",
    slug: "v7-2-session-cookie-attributes",
    title: "Session Cookie Attributes",
    description: "Secure, HttpOnly, SameSite, Domain, Path, and expiration settings for session cookies.",
    chapterId: "V7",
    asvsVersion: "5.0.0",
  },
  {
    id: "V7.3",
    slug: "v7-3-session-termination",
    title: "Session Termination and Timeout",
    description: "Idle timeout, absolute timeout, logout, and invalidation on the server and client.",
    chapterId: "V7",
    asvsVersion: "5.0.0",
  },
  {
    id: "V7.4",
    slug: "v7-4-session-storage",
    title: "Session Storage",
    description: "Server-side session stores, database-backed sessions, and prevention of session fixation.",
    chapterId: "V7",
    asvsVersion: "5.0.0",
  },
// â”€â”€ V8: Authorization â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "V8.1",
    slug: "v8-1-access-control-design",
    title: "Access Control Design",
    description: "Architectural patterns for authorization, policy models, and centralized enforcement.",
    chapterId: "V8",
    asvsVersion: "5.0.0",
  },
  {
    id: "V8.2",
    slug: "v8-2-data-level-authorization",
    title: "Data-Level Authorization",
    description: "Row-level security, tenant isolation, ownership checks, and privacy controls.",
    chapterId: "V8",
    asvsVersion: "5.0.0",
  },
  {
    id: "V8.3",
    slug: "v8-3-function-level-authorization",
    title: "Function-Level Authorization",
    description: "Role-based access control, permission checks, and secure default-deny patterns.",
    chapterId: "V8",
    asvsVersion: "5.0.0",
  },
  {
    id: "V8.4",
    slug: "v8-4-privilege-escalation",
    title: "Privilege Escalation Prevention",
    description: "IDOR prevention, parameter tampering defense, and horizontal/vertical escalation checks.",
    chapterId: "V8",
    asvsVersion: "5.0.0",
  },

  // â”€â”€ V9: Self-Contained Tokens â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "V9.1",
    slug: "v9-1-token-design",
    title: "Token Design and Structure",
    description: "JWT structure, claims, signature algorithms, header validation, and token composition.",
    chapterId: "V9",
    asvsVersion: "5.0.0",
  },
  {
    id: "V9.2",
    slug: "v9-2-token-validation",
    title: "Token Validation",
    description: "Signature verification, issuer and audience checks, expiration enforcement, and revocation lookup.",
    chapterId: "V9",
    asvsVersion: "5.0.0",
  },
  {
    id: "V9.3",
    slug: "v9-3-token-storage",
    title: "Token Storage",
    description: "Client-side and server-side token storage patterns, encryption, and access controls.",
    chapterId: "V9",
    asvsVersion: "5.0.0",
  },
  {
    id: "V9.4",
    slug: "v9-4-token-revocation",
    title: "Token Revocation and Lifecycle",
    description: "Revocation lists, short-lived tokens, refresh token rotation, and logout handling.",
    chapterId: "V9",
    asvsVersion: "5.0.0",
  },

  // â”€â”€ V10: OAuth and OIDC â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "V10.1",
    slug: "v10-1-oauth-client-security",
    title: "OAuth Client Security",
    description: "Client registration, client authentication, redirect URI validation, and PKCE enforcement.",
    chapterId: "V10",
    asvsVersion: "5.0.0",
  },
  {
    id: "V10.2",
    slug: "v10-2-authorization-server-security",
    title: "Authorization Server Security",
    description: "Grant-type restrictions, scope validation, consent management, and refresh token policies.",
    chapterId: "V10",
    asvsVersion: "5.0.0",
  },
  {
    id: "V10.3",
    slug: "v10-3-token-security",
    title: "Token Security in OAuth",
    description: "Access token scoping, audience restriction, binding, and sender-constraining tokens.",
    chapterId: "V10",
    asvsVersion: "5.0.0",
  },
  {
    id: "V10.4",
    slug: "v10-4-oidc-specifics",
    title: "OpenID Connect Specifics",
    description: "ID token validation, nonce, claims handling, and hybrid flow security considerations.",
    chapterId: "V10",
    asvsVersion: "5.0.0",
  },

  // â”€â”€ V11: Cryptography â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "V11.1",
    slug: "v11-1-algorithm-selection",
    title: "Cryptographic Algorithm Selection",
    description: "Choosing approved algorithms, key sizes, modes, and avoiding deprecated primitives.",
    chapterId: "V11",
    asvsVersion: "5.0.0",
  },
  {
    id: "V11.2",
    slug: "v11-2-key-management",
    title: "Key Management",
    description: "Key generation, rotation, derivation, storage, and access controls for cryptographic keys.",
    chapterId: "V11",
    asvsVersion: "5.0.0",
  },
  {
    id: "V11.3",
    slug: "v11-3-randomness",
    title: "Random Number Generation",
    description: "Using cryptographically secure PRNGs, avoiding predictable seeds, and entropy management.",
    chapterId: "V11",
    asvsVersion: "5.0.0",
  },
  {
    id: "V11.4",
    slug: "v11-4-secret-management",
    title: "Secret and Credential Management",
    description: "Handling API keys, connection strings, certificates, and other secrets at rest and in transit.",
    chapterId: "V11",
    asvsVersion: "5.0.0",
  },

  // â”€â”€ V12: Secure Communication â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "V12.1",
    slug: "v12-1-transport-security",
    title: "Transport Security",
    description: "TLS configuration, cipher suites, protocol versions, and HSTS enforcement.",
    chapterId: "V12",
    asvsVersion: "5.0.0",
  },
  {
    id: "V12.2",
    slug: "v12-2-certificate-validation",
    title: "Certificate Validation",
    description: "Certificate chain validation, pinning, revocation checks, and trust store management.",
    chapterId: "V12",
    asvsVersion: "5.0.0",
  },
  {
    id: "V12.3",
    slug: "v12-3-communication-integrity",
    title: "Communication Integrity",
    description: "Message integrity, replay protection, forward secrecy, and downgrade prevention.",
    chapterId: "V12",
    asvsVersion: "5.0.0",
  },
  {
    id: "V12.4",
    slug: "v12-4-network-security",
    title: "Network Security",
    description: "Network segmentation, service isolation, mutual TLS, and east-west traffic security.",
    chapterId: "V12",
    asvsVersion: "5.0.0",
  },
];

/** Lookup a section by its slug (e.g. "v1-1-encoding-sanitization-architecture"). */
export function getSectionBySlug(slug: string): Section | undefined {
  return sections.find((section) => section.slug === slug);
}

/** Return all sections belonging to a chapter (e.g. "V1"). */
export function getSectionsByChapter(chapterId: string): Section[] {
  return sections.filter((section) => section.chapterId === chapterId);
}
