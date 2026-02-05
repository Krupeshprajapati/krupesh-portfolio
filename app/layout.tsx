import "./globals.css";

export const metadata = {
  title: "Krupesh D. Prajapati | AI/ML Developer",
  description:
    "AI/ML Developer building intelligent systems with modern technologies.",
  openGraph: {
    title: "Krupesh D. Prajapati",
    description: "AI / ML Developer Portfolio",
    url: "https://your-domain.vercel.app",
    siteName: "Krupesh Portfolio",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-[#0b0b0f] dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
