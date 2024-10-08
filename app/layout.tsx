import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderSection from "./_components/sections/header";
import FooterSection from "./_components/sections/footer";
import { Analytics } from "@vercel/analytics/react"
import { ThemeWrapper } from "./_components/wrapper/theme-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nafis Arinda Rizky Putra Handoko",
  description: "Nafis Handoko Portfolio Website using Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeWrapper>
          <HeaderSection />
          {children}
          <FooterSection />
          <Analytics />
        </ThemeWrapper>
      </body>
    </html>
  );
}
