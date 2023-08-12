import "./globals.css";
import { AppProvider } from "@/contexts/context";
import { Work_Sans } from "next/font/google";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import StarBg from "@/components/ui/StarBg/StarBg";

const myFont = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Mehedi Hasan",
  description: "Portfolio of Mehedi Hasan",
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
          <StarBg />
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </AppProvider>
      </body>
    </html>
  );
}
