import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Plate Flanges",
  description: "Industrial Pipe Flanges",
  metadataBase: new URL("https://plateflanges.com"),
  openGraph: {
    type: "website",
    siteName: "Plate Flanges",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: `
          :root {
            --navy: #0f172a;
            --electric-blue: #38bdf8;
            --text-white: #ffffff;
            --font-body: 'Inter', sans-serif;
            --font-mono: 'JetBrains Mono', monospace;
          }

          * {
            font-family: var(--font-body);
          }

          body {
            background-color: var(--navy);
            color: var(--text-white);
            margin: 0;
            padding: 0;
          }

          html {
            scroll-behavior: smooth;
          }

          h1, h2, h3, h4, h5, h6 {
            font-weight: 700;
          }

          a {
            color: var(--electric-blue);
            text-decoration: none;
            transition: opacity 0.2s ease;
          }

          a:hover {
            opacity: 0.8;
          }

          .dot-pattern {
            background-image: radial-gradient(circle, var(--electric-blue) 1px, transparent 1px);
            background-size: 40px 40px;
          }
        `}} />
      </head>
      <body>
        <GoogleAnalytics />{children}</body>
    </html>
  );
}
