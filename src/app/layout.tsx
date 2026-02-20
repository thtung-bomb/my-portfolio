import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { NavMenu, HomeFooter } from "@/common/component";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Thanh Tung Portfolio",
    default: "Thanh Tung — Software Engineer",
  },
  description:
    "Software Engineer specializing in React, Next.js, TypeScript & Go. Open to new opportunities.",
  keywords: ["Software Engineer", "React", "Next.js", "TypeScript", "Go", "Portfolio"],
  authors: [{ name: "Thanh Tung", url: "https://yourportfolio.com" }],
  creator: "Thanh Tung",

  // Open Graph (Facebook, LinkedIn preview)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    siteName: "Thanh Tung Portfolio",
    title: "Thanh Tung — Software Engineer",
    description: "Software Engineer specializing in React, Next.js & Go.",
    images: [
      {
        url: "../../public/image-bg.png", // 1200x630px
        width: 1200,
        height: 630,
        alt: "Thanh Tung — Portfolio",
      },
    ],
  },

  // Canonical URL
  metadataBase: new URL("https://yourportfolio.com"),

  // Robots
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased flex flex-col relative`}
      >
        <div className="fixed inset-0 -z-10 overflow-hidden">

          {/* Gradient Base */}
          <div className="absolute inset-0 
            bg-linear-to-br  
            from-slate-950 via-slate-900 to-slate-950"
          />

          {/* Radial Glow */}
          <div className="
            absolute left-1/2 -translate-x-1/2
            top-[-30%] md:top-[-20%]
            w-100 h-100 
            sm:w-150 sm:h-150
            md:w-200 md:h-200
            bg-indigo-500/20 
            blur-[100px] md:blur-[140px]
            rounded-full
          " />

          {/* Grid Pattern */}
          <div className="
            absolute inset-0 
            bg-[radial-gradient(circle_at_1px_1px,rgba(99,102,241,0.15)_1px,transparent_0)]
            bg-size-[25px_25px] sm:bg-size-[30px_30px] md:bg-size-[40px_40px]
            opacity-30
          " />

        </div>

        <NavMenu />

        <main className="">
          {children}
        </main>

        <HomeFooter className="mt-auto z-10" />
      </body>
    </html>
  );
}
