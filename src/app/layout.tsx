import type { Metadata } from "next";
import { Geist, Geist_Mono, Black_Han_Sans } from "next/font/google";
import { Header } from "./_components/Header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BlackHanSans = Black_Han_Sans({
  variable: "--font-black-han-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Angel Tour - 엔젤투어",
  description: "미얀마 해외골프 여행사 엔젤투어입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${BlackHanSans.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
