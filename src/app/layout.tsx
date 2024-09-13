import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import IconSidebar from "@/components/sidebar/IconSidebar";
import Footer from "@/ui/Footer";
import CookieBanner from "@/ui/CookieBanner";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ShopZilla",
  // Generated by chatGPT
  description: `Welcome to ShopZilla, your ultimate one-stop shop where you can find almost anything you need! Whether it's electronics, fashion, home goods, toys, or leisure items – we offer a vast selection to meet every need. With our intuitive interface, fast shipping, and secure payment options, your shopping experience is easy and convenient.
Browse through our categories, discover new products, and enjoy exclusive deals – ShopZilla brings everything you want right to your doorstep!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={roboto.className}>
        <StoreProvider>
          <CookieBanner />
          <Sidebar />
          <Header />
          <IconSidebar />
          <main className="duration-200 md:ml-20">{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
