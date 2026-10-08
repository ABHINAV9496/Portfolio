import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import Background from "@/components/Background";

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
        <Providers>
          <Background />
          {children}
        </Providers>
      </body>
    </html>
  );
}
