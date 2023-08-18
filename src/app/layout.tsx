import "./globals.css";
import { AppProvider } from "@/contexts/context";
import { Work_Sans } from "next/font/google";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import StarBg from "@/components/ui/StarBg/StarBg";
import Sidebar from "@/components/Sidebar/Sidebar";
import Loader from "@/components/Loader/Loader";
import React from "react";

const myFont = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mehedi Hasan | Web Developer",
  description: "Portfolio Website of Mehedi Hasan",
  authors: [{name: 'Mehedi', url: 'https://md-mehedi-hasan.vercel.app'}],
  creator: 'Mehedi Hasan',
  keywords: ['best web developer portfolio', 'developer portfolio', 'portfolio'],
  publisher: 'Mehedi Hasan',

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <AppProvider>
          <SmoothScrollProvider>
            <Loader/>
          <Sidebar/>
          <StarBg />
            {children}
            </SmoothScrollProvider>
        </AppProvider>
      </body>
    </html>
  );
}
