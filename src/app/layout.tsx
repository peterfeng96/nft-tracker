import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import NavBar from "@/components/NavBar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NFT Tracker",
  description: "Next level NFT tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
