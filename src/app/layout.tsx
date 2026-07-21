import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LUXORA | Rooftop Lounge & Fine Dining • Level 42",
  description:
    "Level 42 Rooftop Sanctuary featuring 180° panoramic skyline views, Michelin-inspired gastronomy by Chef Marcus Vance, and master mixology.",
  keywords: [
    "LUXORA rooftop lounge",
    "luxury fine dining",
    "VIP rooftop venue",
    "Level 42 skyline bar",
    "signature mixology",
  ],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${plusJakarta.variable} antialiased bg-luxora-bg text-luxora-white overflow-x-hidden font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
