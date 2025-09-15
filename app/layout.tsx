import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext";

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  variable: "--font-cairo"
});

export const metadata: Metadata = {
  title: "Tailor AI - Custom Embroidery with AI",
  description: "Transform your garments with AI-powered embroidery designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cairo.variable}>
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
