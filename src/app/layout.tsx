import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import IconSidebar from "@/components/sidebar/IconSidebar";
import Footer from "@/ui/Footer";
import CookieBanner from "@/ui/CookieBanner";
import CartSidebar from "@/components/sidebar/CartSidebar";
import CartOverlay from "@/ui/CartOverlay";
import ImageZoomOverlay from "@/ui/ImageZoomOverlay";
import ApplyTheme from "@/ui/ApplyTheme";
import LoadCart from "@/ui/LoadCart";
import Toast from "@/ui/Toast";
import SidebarOverlay from "@/ui/SidebarOverlay";

/**
 * Das ist das Grundlayout für das gesamte HTML Dokument. Somit auch alle Unterseiten für die
 * gesamte Website. Jede Komponente im body-tag ist in jeder Unterseite vorhanden.
 * Da der Redux Store für die gesamte Anwendung gilt muss er um alle Komponenten gesetzt werden.
 *
 *
 */

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Soner-MyShop",
    default: "Soner-MyShop – Shop Electronics, Fashion & More",
  },
  description:
    "Explore a wide range of electronics, fashion, home goods, and more at Soner-MyShop. Enjoy secure shopping with fast deliveries and exclusive deals!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${roboto.className} dark:bg-slate-900 dark:text-white`}>
        <StoreProvider>
          <Header />
          <Sidebar />
          <CookieBanner />
          <CartSidebar />
          <IconSidebar />
          <main className="duration-200 md:ml-20">{children}</main>
          {/**
           * Background Overlay für die entsprechenden Komponenten
           */}
          <CartOverlay />
          <SidebarOverlay />
          <ImageZoomOverlay />
          <Footer />
          <LoadCart />
          <ApplyTheme />
          <Toast />
        </StoreProvider>
      </body>
    </html>
  );
}
