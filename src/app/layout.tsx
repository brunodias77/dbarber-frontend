import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "DBarber | Home",
  description: "DBarber is a barber shop in the heart of London.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <div className="App">
          <Header />
          <main className="AppBody bg-background_primary">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
