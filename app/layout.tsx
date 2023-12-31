import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import QueryProvider from "@/contexts/QueryProvider";
import Footer from "@/components/Footer";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb-clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <html lang="en">
        <body className={`${nunito.className}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </QueryProvider>
  );
}
