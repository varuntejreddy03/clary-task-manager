import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clary Task Manager | AskFirst",
  description:
    "A healthcare-inspired mini workflow app built with Next.js, Zustand, and localStorage.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased blob-decoration`}>
        {children}
      </body>
    </html>
  );
}
