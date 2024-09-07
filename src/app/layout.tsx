import type { Metadata } from "next";
import "./globals.scss";
import { Footer, Navbar } from "./components/common";

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
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-neutral-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
