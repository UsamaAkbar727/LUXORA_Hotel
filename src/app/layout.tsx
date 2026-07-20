import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUXORA | Luxury Rooftop Lounge & Event Venue",
  description:
    "Elevate your nights at LUXORA — a premium rooftop lounge and event venue offering VIP experiences, signature cocktails, live music, and unforgettable private events in the heart of the city.",
  keywords: [
    "luxury rooftop lounge",
    "premium event venue",
    "VIP lounge",
    "signature cocktails",
    "live music",
    "private events",
    "LUXORA",
    "rooftop bar",
    "nightlife",
  ],
  authors: [{ name: "LUXORA" }],
  openGraph: {
    title: "LUXORA | Luxury Rooftop Lounge & Event Venue",
    description:
      "Elevate your nights at LUXORA — a premium rooftop lounge and event venue offering VIP experiences, signature cocktails, and live music.",
    url: "https://luxora.com",
    siteName: "LUXORA",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUXORA | Luxury Rooftop Lounge & Event Venue",
    description:
      "Elevate your nights at LUXORA — a premium rooftop lounge and event venue.",
  },
  icons: {
    icon: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-luxora-bg text-luxora-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
