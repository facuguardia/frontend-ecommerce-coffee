import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sabores del Mundo | Coffee Motril",
  description:
    "Explora nuestra selección de cafés de especialidad en cápsulas, grano y molido, con orígenes únicos de África, Sudamérica, Asia y Oceanía. Descubre sabores dulces y cítricos que deleitarán tu paladar. Perfecto para amantes del café que buscan calidad y variedad en cada taza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
