import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Pooja K Kini | Portfolio",
  description: "Researcher | Gender & Climate Justice | Urban Water",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
