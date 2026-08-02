import type { Control } from "@/types/content";

export const controls: Control[] = [
  {
    asvsVersion: "4.0.3",
    categoryId: "V2",
    controlId: "V2.1.1",
    slug: "password-storage",
    title: "Use approved password storage algorithms",
    summary: "Store passwords with a modern adaptive one-way function and per-password salts.",
    explanation: "Password storage controls reduce the blast radius of credential database exposure. Applications should never store plaintext, encrypted, or fast-hashed passwords.",
    whyItMatters: "Attackers routinely crack weak password hashes offline. Adaptive hashing increases the cost of guessing and gives defenders time to rotate credentials after compromise.",
    insecureExample: "Hashing passwords with SHA-256 is fast and deterministic, which makes bulk password cracking practical after a database leak.",
    secureGuidance: "Use Argon2id, bcrypt, scrypt, or PBKDF2 with current parameters, unique salts, and a managed password reset process. Keep parameters configurable for future increases.",
    codeExamples: [
      {
        language: "typescript",
        label: "Node.js",
        filename: "passwords.ts",
        secure: true,
        code: "import argon2 from 'argon2';\n\nexport async function hashPassword(password: string) {\n  return argon2.hash(password, { type: argon2.argon2id });\n}\n\nexport async function verifyPassword(hash: string, password: string) {\n  return argon2.verify(hash, password);\n}",
      },
      {
        language: "python",
        label: "Python",
        filename: "passwords.py",
        secure: true,
        code: "from argon2 import PasswordHasher\n\nph = PasswordHasher()\n\ndef hash_password(password: str) -> str:\n    return ph.hash(password)\n\ndef verify_password(hash_value: str, password: str) -> bool:\n    return ph.verify(hash_value, password)",
      },
    ],
    testingNotes: [
      "Confirm stored password values are not plaintext or reversible encryption.",
      "Verify each stored hash contains algorithm parameters and a unique salt.",
      "Review reset and migration logic for legacy hashes.",
    ],
    references: [
      { label: "OWASP Password Storage Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" },
      { label: "OWASP ASVS 4.0.3", url: "https://owasp.org/www-project-application-security-verification-standard/" },
    ],
    tags: ["authentication", "passwords", "cryptography"],
    difficulty: "foundational",
    reviewStatus: "draft",
    relatedControls: [
      { id: "V2.1.7", title: "Password change and reset", href: "/controls/password-reset" },
      { id: "V2.2.1", title: "Anti-automation controls", href: "/controls/anti-automation" },
    ],
  },
  {
    asvsVersion: "4.0.3",
    categoryId: "V3",
    controlId: "V3.4.1",
    slug: "secure-session-cookies",
    title: "Set secure attributes on session cookies",
    summary: "Protect session cookies with Secure, HttpOnly, SameSite, path, and expiration attributes.",
    explanation: "Session cookies are bearer credentials. Browser cookie attributes constrain where cookies are sent and whether client-side scripts can read them.",
    whyItMatters: "Missing cookie attributes make session theft easier through network interception, cross-site requests, and script injection impact.",
    insecureExample: "A default session cookie without Secure or HttpOnly can be exposed to JavaScript and sent over plaintext connections.",
    secureGuidance: "Set Secure and HttpOnly for authenticated sessions, prefer SameSite=Lax or Strict unless cross-site flows require otherwise, and scope cookie path and lifetime tightly.",
    codeExamples: [
      {
        language: "typescript",
        label: "Express",
        filename: "session.ts",
        secure: true,
        code: "app.use(session({\n  name: '__Host-session',\n  secret: process.env.SESSION_SECRET!,\n  cookie: {\n    httpOnly: true,\n    secure: true,\n    sameSite: 'lax',\n    path: '/',\n    maxAge: 1000 * 60 * 30\n  }\n}));",
      },
      {
        language: "java",
        label: "Spring Boot",
        filename: "application.properties",
        secure: true,
        code: "server.servlet.session.cookie.http-only=true\nserver.servlet.session.cookie.secure=true\nserver.servlet.session.cookie.same-site=lax\nserver.servlet.session.timeout=30m",
      },
    ],
    testingNotes: [
      "Inspect Set-Cookie headers after login.",
      "Confirm session cookies are not readable from JavaScript.",
      "Verify production traffic uses HTTPS only.",
    ],
    references: [
      { label: "OWASP Session Management Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" },
    ],
    tags: ["sessions", "cookies", "browser-security"],
    difficulty: "foundational",
    reviewStatus: "draft",
    relatedControls: [
      { id: "V3.2.1", title: "Session token entropy", href: "/controls/session-token-entropy" },
    ],
  },
  {
    asvsVersion: "4.0.3",
    categoryId: "V5",
    controlId: "V5.3.2",
    slug: "contextual-output-encoding",
    title: "Apply contextual output encoding",
    summary: "Encode untrusted data for the exact HTML, JavaScript, URL, or CSS context where it appears.",
    explanation: "Output encoding prevents untrusted data from being interpreted as active content. The correct encoder depends on the sink context.",
    whyItMatters: "Using one generic sanitizer for every output context leaves gaps that can become cross-site scripting vulnerabilities.",
    insecureExample: "Injecting a user-controlled display name into an HTML attribute or script block without context-specific encoding can execute attacker-controlled JavaScript.",
    secureGuidance: "Use framework auto-escaping by default, avoid dangerous raw HTML sinks, and use vetted context-specific encoders when rendering outside framework templates.",
    codeExamples: [
      {
        language: "tsx",
        label: "React",
        filename: "Profile.tsx",
        secure: true,
        code: "export function Profile({ name }: { name: string }) {\n  return <h1>Welcome, {name}</h1>;\n}\n\n// Avoid dangerouslySetInnerHTML for untrusted content.",
      },
      {
        language: "python",
        label: "Jinja2",
        filename: "profile.html",
        secure: true,
        code: "<h1>Welcome, {{ name }}</h1>\n{# Auto-escaping should remain enabled for HTML templates. #}",
      },
    ],
    testingNotes: [
      "Map every untrusted data sink to its rendering context.",
      "Test payloads in HTML body, attribute, URL, and script contexts.",
      "Review any raw HTML rendering exceptions.",
    ],
    references: [
      { label: "OWASP Cross Site Scripting Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" },
    ],
    tags: ["xss", "encoding", "frontend"],
    difficulty: "intermediate",
    reviewStatus: "draft",
    relatedControls: [
      { id: "V5.1.3", title: "Input validation strategy", href: "/controls/input-validation-strategy" },
    ],
  },
  {
    asvsVersion: "4.0.3",
    categoryId: "V7",
    controlId: "V7.1.1",
    slug: "safe-error-handling",
    title: "Return safe error messages",
    summary: "Show generic errors to users while retaining detailed diagnostics in protected logs.",
    explanation: "Error handling should support troubleshooting without disclosing stack traces, secrets, infrastructure details, or business logic internals to users.",
    whyItMatters: "Verbose errors help attackers enumerate technologies, paths, account states, and exploitable edge cases.",
    insecureExample: "Returning raw exception messages and stack traces in production exposes implementation details and sometimes credentials.",
    secureGuidance: "Use centralized error handlers, correlation IDs, structured logs, and environment-aware response policies. Never log sensitive values unnecessarily.",
    codeExamples: [
      {
        language: "typescript",
        label: "Next.js API",
        filename: "route.ts",
        secure: true,
        code: "export async function GET() {\n  try {\n    return Response.json({ status: 'ok' });\n  } catch (error) {\n    console.error({ error, event: 'healthcheck_failed' });\n    return Response.json({ error: 'Unexpected server error' }, { status: 500 });\n  }\n}",
      },
    ],
    testingNotes: [
      "Trigger representative validation, dependency, and authorization failures.",
      "Confirm responses do not include stack traces or internal identifiers.",
      "Verify logs contain correlation context for incident review.",
    ],
    references: [
      { label: "OWASP Error Handling Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Error_Handling_Cheat_Sheet.html" },
    ],
    tags: ["errors", "logging", "observability"],
    difficulty: "foundational",
    reviewStatus: "draft",
    relatedControls: [
      { id: "V7.2.1", title: "Security event logging", href: "/controls/security-event-logging" },
    ],
  },
];

export function getControlBySlug(slug: string) {
  return controls.find((control) => control.slug === slug);
}

export function getControlsByCategory(categoryId: string, asvsVersion?: string) {
  return controls.filter(
    (control) => control.categoryId === categoryId && (!asvsVersion || control.asvsVersion === asvsVersion),
  );
}

export function getAllTags() {
  return Array.from(new Set(controls.flatMap((control) => control.tags))).sort();
}
