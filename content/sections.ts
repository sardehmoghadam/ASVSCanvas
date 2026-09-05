import type { Section } from "@/types/content";

/** ASVS 5.0.0 sections - official chapter/section hierarchy. */
export const sections: Section[] = [
  // -- V1: Encoding and Sanitization (5 sections) --
  { id:"V1.1", slug:"v1-1-encoding-sanitization-architecture", title:"Encoding and Sanitization Architecture", description:"Foundational patterns for secure encoding, canonicalization, and sanitization.", chapterId:"V1", standardVersion:"5.0.0" },
  { id:"V1.2", slug:"v1-2-injection-prevention", title:"Injection Prevention", description:"Preventing injection attacks across interpreters, protocols, and data formats.", chapterId:"V1", standardVersion:"5.0.0" },
  { id:"V1.3", slug:"v1-3-sanitization", title:"Sanitization", description:"Safe handling of rich-text inputs, markup filtering, and defense against markup injection.", chapterId:"V1", standardVersion:"5.0.0" },
  { id:"V1.4", slug:"v1-4-memory-string-unmanaged-code", title:"Memory, String, and Unmanaged Code", description:"Preventing buffer overflows, format-string vulnerabilities, and unmanaged code risks.", chapterId:"V1", standardVersion:"5.0.0" },
  { id:"V1.5", slug:"v1-5-safe-deserialization", title:"Safe Deserialization", description:"Preventing code execution, type confusion, and injection through deserialization.", chapterId:"V1", standardVersion:"5.0.0" },

  // -- V2: Validation and Business Logic (4 sections) --
  { id:"V2.1", slug:"v2-1-validation-business-logic-documentation", title:"Validation and Business Logic Documentation", description:"Documenting validation rules, business constraints, and data flow assumptions.", chapterId:"V2", standardVersion:"5.0.0" },
  { id:"V2.2", slug:"v2-2-input-validation", title:"Input Validation", description:"Allowlist-based validation, canonicalization, type checking, and length enforcement.", chapterId:"V2", standardVersion:"5.0.0" },
  { id:"V2.3", slug:"v2-3-business-logic-security", title:"Business Logic Security", description:"Consistency checks, transaction limits, workflow state validation, and abuse prevention.", chapterId:"V2", standardVersion:"5.0.0" },
  { id:"V2.4", slug:"v2-4-anti-automation", title:"Anti-automation", description:"CAPTCHA, rate limiting, account lockout, and bot mitigation techniques.", chapterId:"V2", standardVersion:"5.0.0" },

  // -- V3: Web Frontend Security (7 sections) --
  { id:"V3.1", slug:"v3-1-web-frontend-security-documentation", title:"Web Frontend Security Documentation", description:"Documenting frontend security architecture, trusted sources, and client-side assumptions.", chapterId:"V3", standardVersion:"5.0.0" },
  { id:"V3.2", slug:"v3-2-unintended-content-interpretation", title:"Unintended Content Interpretation", description:"Preventing content-type sniffing, MIME confusion, and polyglot attacks.", chapterId:"V3", standardVersion:"5.0.0" },
  { id:"V3.3", slug:"v3-3-cookie-setup", title:"Cookie Setup", description:"Secure, HttpOnly, SameSite, Domain, Path, and expiration settings.", chapterId:"V3", standardVersion:"5.0.0" },
  { id:"V3.4", slug:"v3-4-browser-security-mechanism-headers", title:"Browser Security Mechanism Headers", description:"CSP, HSTS, X-Frame-Options, Referrer-Policy, and other security headers.", chapterId:"V3", standardVersion:"5.0.0" },
  { id:"V3.5", slug:"v3-5-browser-origin-separation", title:"Browser Origin Separation", description:"Same-origin policy, cross-origin isolation, postMessage, and CORS.", chapterId:"V3", standardVersion:"5.0.0" },
  { id:"V3.6", slug:"v3-6-external-resource-integrity", title:"External Resource Integrity", description:"Subresource Integrity, trusted CDN usage, and third-party asset verification.", chapterId:"V3", standardVersion:"5.0.0" },
  { id:"V3.7", slug:"v3-7-other-browser-security-considerations", title:"Other Browser Security Considerations", description:"Browser storage, Web Workers, Service Workers, and platform security.", chapterId:"V3", standardVersion:"5.0.0" },

  // -- V4: API and Web Service (4 sections) --
  { id:"V4.1", slug:"v4-1-generic-web-service-security", title:"Generic Web Service Security", description:"General security controls for REST, SOAP, and other web service paradigms.", chapterId:"V4", standardVersion:"5.0.0" },
  { id:"V4.2", slug:"v4-2-http-message-structure-validation", title:"HTTP Message Structure Validation", description:"Validating HTTP method, headers, Content-Type, and request/response structure.", chapterId:"V4", standardVersion:"5.0.0" },
  { id:"V4.3", slug:"v4-3-graphql", title:"GraphQL", description:"Query depth limiting, introspection control, batching attacks, and authorization.", chapterId:"V4", standardVersion:"5.0.0" },
  { id:"V4.4", slug:"v4-4-websocket", title:"WebSocket", description:"Origin validation, authentication, framing, and connection management.", chapterId:"V4", standardVersion:"5.0.0" },

  // -- V5: File Handling (4 sections) --
  { id:"V5.1", slug:"v5-1-file-handling-documentation", title:"File Handling Documentation", description:"Documenting file flows, storage locations, allowed types, and processing pipelines.", chapterId:"V5", standardVersion:"5.0.0" },
  { id:"V5.2", slug:"v5-2-file-upload-content", title:"File Upload and Content", description:"Type verification, content inspection, metadata scanning, and malware detection.", chapterId:"V5", standardVersion:"5.0.0" },
  { id:"V5.3", slug:"v5-3-file-storage", title:"File Storage", description:"Secure paths, access controls, encryption, and isolation for stored files.", chapterId:"V5", standardVersion:"5.0.0" },
  { id:"V5.4", slug:"v5-4-file-download", title:"File Download", description:"Safe serving, Content-Type headers, download authorization, and filename validation.", chapterId:"V5", standardVersion:"5.0.0" },

  // -- V6: Authentication (8 sections) --
  { id:"V6.1", slug:"v6-1-authentication-documentation", title:"Authentication Documentation", description:"Documenting auth architecture, flows, credential policies, and factor requirements.", chapterId:"V6", standardVersion:"5.0.0" },
  { id:"V6.2", slug:"v6-2-password-security", title:"Password Security", description:"Password hashing, composition policies, credential storage, and breach response.", chapterId:"V6", standardVersion:"5.0.0" },
  { id:"V6.3", slug:"v6-3-general-authentication-security", title:"General Authentication Security", description:"Transport security, error handling, enumeration resistance, and brute-force guard.", chapterId:"V6", standardVersion:"5.0.0" },
  { id:"V6.4", slug:"v6-4-authentication-factor-lifecycle-recovery", title:"Authentication Factor Lifecycle and Recovery", description:"Enrollment, renewal, recovery codes, and decommissioning of auth factors.", chapterId:"V6", standardVersion:"5.0.0" },
  { id:"V6.5", slug:"v6-5-general-mfa-requirements", title:"General Multi-factor authentication requirements", description:"MFA design, bypass prevention, step-up auth, and second-factor binding.", chapterId:"V6", standardVersion:"5.0.0" },
  { id:"V6.6", slug:"v6-6-out-of-band-authentication", title:"Out-of-Band authentication mechanisms", description:"SMS, email, push, and voice OOB authentication security.", chapterId:"V6", standardVersion:"5.0.0" },
  { id:"V6.7", slug:"v6-7-cryptographic-authentication", title:"Cryptographic authentication mechanism", description:"FIDO2, WebAuthn, smart cards, and hardware-backed crypto authentication.", chapterId:"V6", standardVersion:"5.0.0" },
  { id:"V6.8", slug:"v6-8-authentication-identity-provider", title:"Authentication with an Identity Provider", description:"SAML, OIDC, and social login integration security and claim verification.", chapterId:"V6", standardVersion:"5.0.0" },

  // -- V7: Session Management (6 sections) --
  { id:"V7.1", slug:"v7-1-session-management-documentation", title:"Session Management Documentation", description:"Documenting session architecture, token design, storage strategy, and timeout policies.", chapterId:"V7", standardVersion:"5.0.0" },
  { id:"V7.2", slug:"v7-2-fundamental-session-management-security", title:"Fundamental Session Management Security", description:"Session ID generation, binding, renewal, and server-side validation.", chapterId:"V7", standardVersion:"5.0.0" },
  { id:"V7.3", slug:"v7-3-session-timeout", title:"Session Timeout", description:"Idle timeout, absolute timeout, and inactivity-based session expiration.", chapterId:"V7", standardVersion:"5.0.0" },
  { id:"V7.4", slug:"v7-4-session-termination", title:"Session Termination", description:"Logout, invalidation, single sign-out, and forced session termination.", chapterId:"V7", standardVersion:"5.0.0" },
  { id:"V7.5", slug:"v7-5-defenses-against-session-abuse", title:"Defenses Against Session Abuse", description:"Session fixation, hijacking, replay, and concurrent session protections.", chapterId:"V7", standardVersion:"5.0.0" },
  { id:"V7.6", slug:"v7-6-federated-re-authentication", title:"Federated Re-authentication", description:"Step-up authentication, forced re-authentication, and RP-initiated logout.", chapterId:"V7", standardVersion:"5.0.0" },

  // -- V8: Authorization (4 sections) --
  { id:"V8.1", slug:"v8-1-authorization-documentation", title:"Authorization Documentation", description:"Documenting access control models, roles, permissions, and policy enforcement points.", chapterId:"V8", standardVersion:"5.0.0" },
  { id:"V8.2", slug:"v8-2-general-authorization-design", title:"General Authorization Design", description:"Least privilege, deny-by-default, centralized enforcement, and policy patterns.", chapterId:"V8", standardVersion:"5.0.0" },
  { id:"V8.3", slug:"v8-3-operation-level-authorization", title:"Operation Level Authorization", description:"Function-level, data-level, and resource-level access control enforcement.", chapterId:"V8", standardVersion:"5.0.0" },
  { id:"V8.4", slug:"v8-4-other-authorization-considerations", title:"Other Authorization Considerations", description:"IDOR prevention, privilege escalation defense, and authorization bypass protections.", chapterId:"V8", standardVersion:"5.0.0" },

  // -- V9: Self-contained Tokens (2 sections) --
  { id:"V9.1", slug:"v9-1-token-source-integrity", title:"Token source and integrity", description:"JWT issuer trust, algorithm validation, key sourcing, and token origin verification.", chapterId:"V9", standardVersion:"5.0.0" },
  { id:"V9.2", slug:"v9-2-token-content", title:"Token content", description:"Claims validation, audience restriction, expiration, scope, and token composition.", chapterId:"V9", standardVersion:"5.0.0" },

  // -- V10: OAuth and OIDC (7 sections) --
  { id:"V10.1", slug:"v10-1-generic-oauth-oidc-security", title:"Generic OAuth and OIDC Security", description:"Cross-cutting security requirements for all OAuth 2.0 and OIDC roles.", chapterId:"V10", standardVersion:"5.0.0" },
  { id:"V10.2", slug:"v10-2-oauth-client", title:"OAuth Client", description:"Client registration, redirect URI validation, PKCE, and client authentication.", chapterId:"V10", standardVersion:"5.0.0" },
  { id:"V10.3", slug:"v10-3-oauth-resource-server", title:"OAuth Resource Server", description:"Access token validation, scope enforcement, audience restriction, and token binding.", chapterId:"V10", standardVersion:"5.0.0" },
  { id:"V10.4", slug:"v10-4-oauth-authorization-server", title:"OAuth Authorization Server", description:"Grant-type restrictions, consent, refresh tokens, and authorization code security.", chapterId:"V10", standardVersion:"5.0.0" },
  { id:"V10.5", slug:"v10-5-oidc-client", title:"OIDC Client", description:"ID token validation, nonce, state parameter, and hybrid flow security.", chapterId:"V10", standardVersion:"5.0.0" },
  { id:"V10.6", slug:"v10-6-openid-provider", title:"OpenID Provider", description:"OP discovery, ID token issuance, UserInfo endpoint, and session management.", chapterId:"V10", standardVersion:"5.0.0" },
  { id:"V10.7", slug:"v10-7-consent-management", title:"Consent Management", description:"User consent flows, scope transparency, revocation, and privacy controls.", chapterId:"V10", standardVersion:"5.0.0" },

  // -- V11: Cryptography (7 sections) --
  { id:"V11.1", slug:"v11-1-cryptographic-inventory-documentation", title:"Cryptographic Inventory and Documentation", description:"Documenting crypto assets, algorithms, keys, and their lifecycle.", chapterId:"V11", standardVersion:"5.0.0" },
  { id:"V11.2", slug:"v11-2-secure-cryptography-implementation", title:"Secure Cryptography Implementation", description:"Using approved libraries, avoiding custom crypto, and proper API usage.", chapterId:"V11", standardVersion:"5.0.0" },
  { id:"V11.3", slug:"v11-3-encryption-algorithms", title:"Encryption Algorithms", description:"Algorithm selection, modes, padding, key sizes, and authenticated encryption.", chapterId:"V11", standardVersion:"5.0.0" },
  { id:"V11.4", slug:"v11-4-hashing-hash-based-functions", title:"Hashing and Hash-based Functions", description:"Cryptographic hashing, HMAC, password hashing, and hash-based constructions.", chapterId:"V11", standardVersion:"5.0.0" },
  { id:"V11.5", slug:"v11-5-random-values", title:"Random Values", description:"CSPRNG usage, seed management, and avoiding weak or predictable randomness.", chapterId:"V11", standardVersion:"5.0.0" },
  { id:"V11.6", slug:"v11-6-public-key-cryptography", title:"Public Key Cryptography", description:"Key generation, certificate management, digital signatures, and key agreement.", chapterId:"V11", standardVersion:"5.0.0" },
  { id:"V11.7", slug:"v11-7-in-use-data-cryptography", title:"In-Use Data Cryptography", description:"Confidential computing, TEEs, memory encryption, and secure enclave usage.", chapterId:"V11", standardVersion:"5.0.0" },

  // -- V12: Secure Communication (3 sections) --
  { id:"V12.1", slug:"v12-1-general-tls-security-guidance", title:"General TLS Security Guidance", description:"TLS versions, cipher suites, key exchange, and common TLS configuration pitfalls.", chapterId:"V12", standardVersion:"5.0.0" },
  { id:"V12.2", slug:"v12-2-https-external-facing-services", title:"HTTPS Communication with External Facing Services", description:"TLS for internet-facing services, certificate validation, and HSTS enforcement.", chapterId:"V12", standardVersion:"5.0.0" },
  { id:"V12.3", slug:"v12-3-service-to-service-communication", title:"General Service to Service Communication Security", description:"mTLS, service mesh, secure internal channels, and inter-service authentication.", chapterId:"V12", standardVersion:"5.0.0" },

  // -- V13: Configuration (4 sections) --
  { id:"V13.1", slug:"v13-1-configuration-documentation", title:"Configuration Documentation", description:"Documenting secure baselines, hardening guides, and environment settings.", chapterId:"V13", standardVersion:"5.0.0" },
  { id:"V13.2", slug:"v13-2-backend-communication-configuration", title:"Backend Communication Configuration", description:"Secure configuration of database connections, message queues, and backend channels.", chapterId:"V13", standardVersion:"5.0.0" },
  { id:"V13.3", slug:"v13-3-secret-management", title:"Secret Management", description:"Handling API keys, connection strings, certificates, and credentials securely.", chapterId:"V13", standardVersion:"5.0.0" },
  { id:"V13.4", slug:"v13-4-unintended-information-leakage", title:"Unintended Information Leakage", description:"Preventing error messages, headers, and debug output from disclosing sensitive data.", chapterId:"V13", standardVersion:"5.0.0" },

  // -- V14: Data Protection (3 sections) --
  { id:"V14.1", slug:"v14-1-data-protection-documentation", title:"Data Protection Documentation", description:"Documenting data classification, protection levels, retention, and disposal.", chapterId:"V14", standardVersion:"5.0.0" },
  { id:"V14.2", slug:"v14-2-general-data-protection", title:"General Data Protection", description:"Encryption at rest, data masking, access logging, and secure deletion.", chapterId:"V14", standardVersion:"5.0.0" },
  { id:"V14.3", slug:"v14-3-client-side-data-protection", title:"Client-side Data Protection", description:"Securing data in browser storage, IndexedDB, Web Workers, and client caches.", chapterId:"V14", standardVersion:"5.0.0" },

  // -- V15: Secure Coding and Architecture (4 sections) --
  { id:"V15.1", slug:"v15-1-secure-coding-architecture-documentation", title:"Secure Coding and Architecture Documentation", description:"Documenting secure coding standards, architecture decisions, and threat models.", chapterId:"V15", standardVersion:"5.0.0" },
  { id:"V15.2", slug:"v15-2-security-architecture-dependencies", title:"Security Architecture and Dependencies", description:"Dependency management, SBOM, vulnerability scanning, and supply chain security.", chapterId:"V15", standardVersion:"5.0.0" },
  { id:"V15.3", slug:"v15-3-defensive-coding", title:"Defensive Coding", description:"Input/output hygiene, safe APIs, compiler flags, and runtime protections.", chapterId:"V15", standardVersion:"5.0.0" },
  { id:"V15.4", slug:"v15-4-safe-concurrency", title:"Safe Concurrency", description:"Race condition prevention, thread safety, atomic operations, and locking best practices.", chapterId:"V15", standardVersion:"5.0.0" },

  // -- V16: Security Logging and Error Handling (5 sections) --
  { id:"V16.1", slug:"v16-1-security-logging-documentation", title:"Security Logging Documentation", description:"Documenting log sources, event taxonomy, retention, and monitoring strategy.", chapterId:"V16", standardVersion:"5.0.0" },
  { id:"V16.2", slug:"v16-2-general-logging", title:"General Logging", description:"Log format, timestamp synchronization, correlation IDs, and structured logging.", chapterId:"V16", standardVersion:"5.0.0" },
  { id:"V16.3", slug:"v16-3-security-events", title:"Security Events", description:"Authentication events, authorization decisions, input validation failures, and audit trails.", chapterId:"V16", standardVersion:"5.0.0" },
  { id:"V16.4", slug:"v16-4-log-protection", title:"Log Protection", description:"Log integrity, access controls, tamper detection, and secure transmission.", chapterId:"V16", standardVersion:"5.0.0" },
  { id:"V16.5", slug:"v16-5-error-handling", title:"Error Handling", description:"Generic error messages, correlation IDs, safe failure modes, and diagnostics separation.", chapterId:"V16", standardVersion:"5.0.0" },

  // -- V17: WebRTC (3 sections) --
  { id:"V17.1", slug:"v17-1-turn-server", title:"TURN Server", description:"Secure TURN server configuration, authentication, and relay protections.", chapterId:"V17", standardVersion:"5.0.0" },
  { id:"V17.2", slug:"v17-2-media", title:"Media", description:"Media stream encryption, SRTP, DTLS, and secure media negotiation.", chapterId:"V17", standardVersion:"5.0.0" },
  { id:"V17.3", slug:"v17-3-signaling", title:"Signaling", description:"Secure signaling channel, authentication, message integrity, and replay protection.", chapterId:"V17", standardVersion:"5.0.0" },
];

/** Lookup a section by its slug. */
export function getSectionBySlug(slug: string): Section | undefined {
  return sections.find((section) => section.slug === slug);
}

/** Return all sections belonging to a chapter. */
export function getSectionsByChapter(chapterId: string): Section[] {
  return sections.filter((section) => section.chapterId === chapterId);
}
