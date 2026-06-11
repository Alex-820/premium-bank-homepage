import type { Metadata } from "next";
import "./globals.css";
import { BANK_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `${BANK_NAME} | Premium Banking, Wealth & Digital Banking`,
  description:
    "A premium institutional banking homepage built with Next.js, TypeScript, and Tailwind CSS."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
