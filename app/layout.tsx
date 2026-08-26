import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_URL, absoluteUrl, buildOpenGraph } from "@/lib/site-config";
import { websiteJsonLd } from "@/lib/structured-data";

const description =
  "Free, open-source OWASP ASVS 5.0.0 training — 345 security controls with plain-English explanations, secure and insecure code examples, and review checklists.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ASVS Academy",
    template: "%s | ASVS Academy",
  },
  description,
  applicationName: "ASVS Academy",
  keywords: [
    "OWASP ASVS",
    "application security",
    "secure coding",
    "ASVS 5.0.0",
    "security controls",
    "AppSec training",
  ],
  creator: "ASVS Academy",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  // Search-engine site-verification tokens are injected here at build time from
  // env vars (see .github/workflows/deploy.yml). null omits the tag entirely.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || null,
  },
  openGraph: buildOpenGraph({
    title: "ASVS Academy",
    description,
    url: absoluteUrl("/"),
  }),
  twitter: {
    card: "summary_large_image",
    title: "ASVS Academy",
    description,
    images: [absoluteUrl("/opengraph-image.png")],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased text-foreground">
        <JsonLd data={websiteJsonLd} />
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}