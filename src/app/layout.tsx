import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Cairo } from "next/font/google";

import { Footer, Navbar } from "./components/common";

import "./globals.scss";

const cairo = Cairo({
  weight: ["400", "500", "700"],
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Safeya Yasien",
  description: "Safeya Yasien Portfolio, Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cairo.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          <Navbar />
          <main className="wrapper pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
