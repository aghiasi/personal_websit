import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Providers from "@/store/Providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
    default: "Ali Ghiasi | Programmer & Application Developer",
    template: "%s | Ali Ghiasi",
  },

  description:
    "Portfolio of Ali Ghiasi, a programmer and application developer working with C++, JavaScript, TypeScript, Node.js, React, Next.js, REST APIs, MongoDB, IBM DB2, and COBOL.",

  keywords: [
    "Ali Ghiasi",
    "Programmer",
    "Application Developer",
    "Software Developer",
    "C++",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React",
    "Next.js",
    "COBOL",
    "IBM DB2",
    "MongoDB",
    "REST API",
  ],

  authors: [
    {
      name: "Ali Ghiasi",
    },
  ],

  creator: "Ali Ghiasi",

  icons: {
    icon: "/assets/images/93682279.png",
    shortcut: "/assets/images/93682279.png",
    apple: "/assets/images/93682279.png",
  },

  openGraph: {
    title: "Ali Ghiasi | Programmer & Application Developer",
    description:
      "Portfolio of Ali Ghiasi — software development, web applications, APIs, databases, and enterprise systems.",
    type: "website",
    locale: "en_US",
    siteName: "Ali Ghiasi",
  },

  twitter: {
    card: "summary",
    title: "Ali Ghiasi | Programmer & Application Developer",
    description:
      "Portfolio of Ali Ghiasi — software development, web applications, APIs, databases, and enterprise systems.",
  },

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}
                    min-h-screen overflow-x-hidden bg-[#070b12]
                    font-sans antialiased text-white`}
      >
        <Providers>
          <Navbar />

          <main className="flex min-h-screen flex-1 flex-col pt-16">
            {children}
          </main>

          <Footer />
        </Providers>
      </body>
    </html>
  );
}
