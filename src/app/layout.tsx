import localFont from "next/font/local";
import "./globals.css";
import { AppProvider } from "@/contexts/context";
import {  Work_Sans } from "next/font/google";

const myFont = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
})

// const myFont = localFont({
//   src: [
//     {
//       path: "/../../public/Poppins/Poppins-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "/../../public/Poppins/Poppins-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "/../../public/Poppins/Poppins-ExtraBold.ttf",
//       weight: "900",
//       style: "normal",
//     },
//   ],
// });

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
      {/* <head>
        <link rel="icon" href="/icon.jpg" type="image/jpg" sizes="any" />
      </head> */}
      <body className={myFont.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
