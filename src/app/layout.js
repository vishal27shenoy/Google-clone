import Footer from "./component/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Search",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/googlelogo.png" type="image/x-icon" />
      <body className="relative min-h-screen">
        <h1 className="text-amber-300"></h1>
        {children}
        <Footer />
      </body>
    </html>
  );
}
