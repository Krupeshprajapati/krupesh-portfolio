import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import CursorGlow from "../components/CursorGlow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Krupesh D. Prajapati | AI / ML Developer",
  description:
    "AI/ML Developer building intelligent, production-ready AI systems for real businesses.",
  openGraph: {
    title: "Krupesh D. Prajapati | AI / ML Developer",
    description:
      "Portfolio of Krupesh D. Prajapati — AI Engineer building real-world AI products.",
    url: "/",
    siteName: "Krupesh Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Krupesh D. Prajapati – AI/ML Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krupesh D. Prajapati | AI / ML Developer",
    description:
      "AI/ML Developer building intelligent systems with data, code, and creativity.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}
          bg-white text-black
          dark:bg-[#0b0b0f] dark:text-white
          dark:ai-bg
          transition-colors duration-300`}
      >
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
