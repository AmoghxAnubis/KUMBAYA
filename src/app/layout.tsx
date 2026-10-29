import type { Metadata } from "next";
import "./globals.css";
import Experience from "@/components/layout/Experience";

export const metadata: Metadata = {
  title: "Kumbaya — A Frank Ocean tribute",
  description: "A journey through four chapters of Frank Ocean's music.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('kumbaya.theme.v1');document.documentElement.dataset.theme=(t==='light'||t==='dark')?t:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){document.documentElement.dataset.theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}})()` }} /></head><body><Experience>{children}</Experience></body></html>;
}

