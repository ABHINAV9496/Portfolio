import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Background from "@/components/Background";
import { profile } from "@/data/content";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://abhinav-a.vercel.app";

const title = "Abhinav A · Python Full-Stack Developer";
const description =
  "Python Full-Stack Developer crafting scalable, production-ready web apps with Django, FastAPI, PostgreSQL, Redis, Docker, AWS and React.js. Based in Kozhikode, India.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: "%s · Abhinav A" },
  description,
  alternates: { canonical: "/" },
  verification: { google: "google355f46462c8f7762.html" },
  keywords: [
    "Abhinav A",
    "Python Full-Stack Developer",
    "Django",
    "FastAPI",
    "React",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "Portfolio",
    "Kozhikode",
  ],
  authors: [{ name: "Abhinav A", url: siteUrl }],
  creator: "Abhinav A",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Abhinav A",
    title,
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      url: siteUrl,
      email: `mailto:${profile.email}`,
      jobTitle: profile.title,
      description: profile.summary,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kozhikode",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      sameAs: [profile.github, profile.linkedin],
      knowsAbout: [
        "Python",
        "Django",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Docker",
        "AWS",
        "React.js",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: profile.name,
      url: siteUrl,
      description,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

const jsonLdScript = JSON.stringify(jsonLd).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript }}
        />
        <Providers>
          <Background />
          {children}
        </Providers>
      </body>
    </html>
  );
}
