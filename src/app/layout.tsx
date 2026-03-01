import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AGRONORTE INGENIEROS | Conocimiento que hace rendir",
  description:
    "No solo vendemos agroquímicos; respaldamos cada producto con conocimiento técnico. Piura, Perú. Alto, medio y bajo Piura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
