import { Inter } from "next/font/google";
import "./globals.css";

import Providers from "./provider";

// Component
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Project With Next JS 14",
  description: "This is imdb app using next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
