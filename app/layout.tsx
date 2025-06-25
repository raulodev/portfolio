import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raúl Cobiellas",
  description: "Dev Full Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="selection:bg-gray-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
