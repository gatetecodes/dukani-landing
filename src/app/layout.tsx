import type { Metadata } from "next";
import { Figtree, Fredoka } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dukani | Your shop, in your pocket",
  description:
    "Track stock, record sales and keep a clear list of who owes you. Dukani runs on your phone, even without internet. Made for shops in Rwanda.",
  keywords: "stock management, POS app, offline POS, inventory tracking, customer credit, small business, Rwanda, dukani app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${fredoka.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-canvas text-ink">{children}</body>
    </html>
  );
}
