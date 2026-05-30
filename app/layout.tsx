import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diego Bouzada | Data & Analytics Engineer",
  description:
    "Data & Analytics Engineer specialized in BigQuery, Microsoft Fabric, dbt, Python, Power BI, Tableau and AI Automation.",

  openGraph: {
    title: "Diego Bouzada | Data & Analytics Engineer",
    description:
      "Cloud Analytics, Data Platforms, BI and AI Automation.",
    url: "https://diego-portfolio-msyk7gs7w-diego-bouzada-s-projects.vercel.app",
    siteName: "Diego Bouzada Portfolio",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Diego Bouzada | Data & Analytics Engineer",
    description:
      "Cloud Analytics, Data Platforms, BI and AI Automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}