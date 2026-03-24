import type { Metadata } from "next";
import { Barlow_Condensed, Fira_Code, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Lucas Moraca — Web Developer",
  description:
    "Custom websites and apps built from scratch. No templates, no shortcuts. Boulder, CO.",
  metadataBase: new URL("https://lucasmoraca.com"),
  openGraph: {
    title: "Lucas Moraca — Web Developer",
    description:
      "Custom websites and apps built from scratch. No templates, no shortcuts.",
    siteName: "Lucas Moraca",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Moraca — Web Developer",
    description:
      "Custom websites and apps built from scratch. No templates, no shortcuts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${barlowCondensed.variable} ${firaCode.variable} antialiased`}>
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
