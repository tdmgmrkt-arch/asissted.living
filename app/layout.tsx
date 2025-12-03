import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Use Inter font
import "./globals.css";

// Setup the Inter font correctly
const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter', // Define the CSS variable
});

export const metadata: Metadata = {
  title: "Assisted Living - Murrieta & Temecula",
  description: "Compassionate 6-bed assisted living homes in Murrieta and Temecula.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the font variable to the body.
        The body should ONLY contain {children}.
        This {children} prop is where Next.js injects
        your actual page content (homepage, Murrieta, etc.).
      */}
      <body className={`${inter.variable} font-sans bg-gray-50 antialiased`}>{children}</body>
    </html>
  );
}