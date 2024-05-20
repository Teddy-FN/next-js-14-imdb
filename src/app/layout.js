import { Inter } from "next/font/google";
import "./globals.css";

// Component
import Header from "./component/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Project With Next JS 14",
  description: "This is imdb app using next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
