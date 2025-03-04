import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/store/Providers";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Ali Ghiasi",
  description: "created with next js and typescript",
  icons: {
  icon: [
    {
      url: "../../public/assets/images/93682279.jpg",
      media: '(prefers-color-scheme: light)',
    },
    {
      url: "../../public/assets/images/93682279.jpg",
      media: '(prefers-color-scheme: dark)',
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen overflow-x-hidden `}
      >
        <Providers>
          {children}
          </Providers>
      </body>
    </html>
  );
}
