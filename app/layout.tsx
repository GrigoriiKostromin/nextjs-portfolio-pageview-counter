import "../global.css";

import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { Inter } from "next/font/google";



export const metadata: Metadata = {
  title: {
    default: "greech.wav",
    template: "%s | greech.wav",
  },
  description: "This is a linktree for my music",
  openGraph: {
    title: "greech.wav",
    description:
      "This is a linktree for my music",
    url: "https://greech.vercel.app",
    siteName: "greech.de",
    
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
