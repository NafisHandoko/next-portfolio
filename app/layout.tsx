import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeWrapper } from "./_components/wrapper/theme-wrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nafis Handoko — Software Engineer",
  description:
    "Full-stack software engineer passionate about building clean, scalable web & mobile experiences. Based in Indonesia 🇮🇩",
  keywords: [
    "software engineer",
    "web developer",
    "react",
    "nextjs",
    "typescript",
    "portfolio",
  ],
  openGraph: {
    title: "Nafis Handoko — Software Engineer",
    description:
      "Full-stack software engineer building modern web & mobile experiences.",
    type: "website",
    siteName: "Nafis Handoko",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        <ThemeWrapper>
          {children}
          <Analytics />
        </ThemeWrapper>
      </body>
    </html>
  );
}
