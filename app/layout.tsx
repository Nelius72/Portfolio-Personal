import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"], 
  variable: "--font-inter"

});

export const metadata: Metadata = {
  title: "Portfolio de Cornelio Romero",
  description: "Mi portfolio personal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans flex min-h-screen flex-col`}>
        <Navbar />
        <main className="flex-1 max-w-6xl mx-auto px-4 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
