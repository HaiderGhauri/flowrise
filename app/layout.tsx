import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

const nunito = Nunito({
  weight: "400",
  subsets: ["latin"],
  display: "swap", 
})


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased bg-[#f6fffe]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
