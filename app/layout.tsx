import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { LanguageProvider } from "@/components/language-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/src/data/profile";
import "./globals.css";

const siteUrl = "https://portofolio-argareksapati.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muhamad Arga Reksapati - Security Researcher",
  description:
    "Security researcher and bug bounty hunter from Bandung, Indonesia, credited for curl CVEs and Google VRP work.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Muhamad Arga Reksapati - Security Researcher",
    description:
      "Security researcher and bug bounty hunter from Bandung, Indonesia, credited for curl CVEs and Google VRP work.",
    url: siteUrl,
    siteName: "areksaxyz",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Muhamad Arga Reksapati security researcher portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhamad Arga Reksapati - Security Researcher",
    description:
      "Security researcher and bug bounty hunter from Bandung, Indonesia, credited for curl CVEs and Google VRP work.",
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  sameAs: [
    profile.links.github,
    profile.links.linkedin,
    profile.links.instagram,
    profile.links.googleBugHuntersProfile
  ],
  jobTitle: "Security Researcher",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bandung",
    addressCountry: "Indonesia"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <Script
          id="person-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
