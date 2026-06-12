import type { Metadata } from "next";
import { Inter, Press_Start_2P } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScroll";
import CRTOverlay from "@/components/ui/CRTOverlay";
import ClientOverlays from "@/components/ui/ClientOverlays";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const pressStart2P = Press_Start_2P({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Shereef | Software Engineer & AI Builder",
  description:
    "Portfolio of Mohamed Shereef — Software Engineer, AI Builder, and B.Tech IT student. Explore my projects, skills, and achievements in an interactive pixel-art world.",
  keywords: [
    "Mohamed Shereef",
    "Software Engineer",
    "AI Builder",
    "Portfolio",
    "Python",
    "React",
    "Full Stack Developer",
    "Machine Learning",
  ],
  authors: [{ name: "Mohamed Shereef" }],
  openGraph: {
    title: "Mohamed Shereef | Software Engineer & AI Builder",
    description:
      "Explore my interactive pixel-art portfolio — projects, skills, and achievements.",
    type: "website",
    url: "https://mhdshareef.com",
    images: [
      {
        url: "/assets/header.webp",
        width: 1200,
        height: 630,
        alt: "Mohamed Shereef - Software Engineer & AI Builder",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${pressStart2P.variable} antialiased overflow-x-hidden`}>
      <body className="min-h-screen bg-game-dark text-game-white overflow-x-hidden w-full relative">
        <ClientOverlays />
        <CRTOverlay />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
