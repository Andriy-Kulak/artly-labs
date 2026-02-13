import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import AnchorOffset from "./AnchorOffset";
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
  metadataBase: new URL("https://artlylabs.com"),
  title: "Artly Labs | Sonito + Parent OS (Ages 0-6)",
  description:
    "Our app Sonito improves baby sleep now. Next: feeding/solids and development for ages 0-6.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Artly Labs | Sonito + Parent OS (Ages 0-6)",
    description:
      "Our app Sonito improves baby sleep now. Next: feeding/solids and development for ages 0-6.",
    url: "/",
    siteName: "Artly Labs",
    type: "website",
    images: [
      {
        url: "/og/artly-share.png",
        width: 1200,
        height: 630,
        alt: "Artly Labs - Parent operating system for ages 0-6",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artly Labs | Sonito + Parent OS (Ages 0-6)",
    description:
      "Our app Sonito improves baby sleep now. Next: feeding/solids and development for ages 0-6.",
    images: ["/og/artly-share.png"],
  },
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
        <AnchorOffset />
      </body>
    </html>
  );
}
