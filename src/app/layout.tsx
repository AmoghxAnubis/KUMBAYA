import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import SceneWrapper from "@/components/canvas/SceneWrapper";
import Preloader from "@/components/dom/Preloader";
import Cursor from "@/components/dom/Cursor";
import Navigation from "@/components/dom/Navigation";

export const metadata: Metadata = {
  title: "Kumbaya",
  description: "A Frank Ocean Storytelling Experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased text-white cursor-none" suppressHydrationWarning>
        <Preloader />
        <Cursor />
        <Navigation />
        <SceneWrapper />
        <SmoothScroll>
          <main className="relative z-10 w-full min-h-screen">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
