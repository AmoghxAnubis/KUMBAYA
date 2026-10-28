import type { Metadata } from "next";
import "./globals.css";
import Experience from "@/components/layout/Experience";

export const metadata: Metadata = {
  title: "Kumbaya — A Frank Ocean tribute",
  description: "A journey through four chapters of Frank Ocean's music.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body suppressHydrationWarning><Experience>{children}</Experience></body></html>;
}

