import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artly Labs | Parent Operating System 0-6",
  description:
    "Artly Labs is building connected products for parents with children ages 0-6, starting with sleep outcomes through Sonito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
