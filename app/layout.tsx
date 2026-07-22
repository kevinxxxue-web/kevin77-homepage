import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kevin77-homepage.vercel.app"),
  title: "Kevin Xue — Kevin77",
  description: "Kevin Xue, aka Kevin77. Investing in AI-native consumer hardware.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Kevin Xue — Kevin77",
    description: "Investing in AI-native consumer hardware.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Kevin Xue, aka Kevin77",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Xue — Kevin77",
    description: "Investing in AI-native consumer hardware.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
