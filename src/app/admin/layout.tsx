import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "../globals.css";
import Sidbar from "./components/Sidbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          min-h-screen
          bg-[#070b12]
          text-white
        `}
      >
        <Sidbar />

        {/* Main content */}
        <main
          className="
            min-h-screen
            w-full
            sm:ml-64
            sm:w-[calc(100%-16rem)]
          "
        >
          {children}
        </main>
      </body>
    </html>
  );
}
