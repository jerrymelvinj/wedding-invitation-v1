import type { Metadata, Viewport } from "next";
import { Cinzel, Great_Vibes, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import GrainOverlay from "@/components/GrainOverlay";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Shubh Vivah",
  description: "Luxury wedding invitation",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${greatVibes.variable} ${plusJakarta.variable} antialiased text-kumkum`}
      >
        <div className="md:max-w-[430px] md:mx-auto md:my-8 md:rounded-[40px] md:overflow-hidden md:shadow-[0_20px_60px_-15px_rgba(62,23,27,0.3)] bg-sandstone relative w-full min-h-dvh">
          <LenisProvider>
            <GrainOverlay />
            {children}
          </LenisProvider>
        </div>
      </body>
    </html>
  );
}
