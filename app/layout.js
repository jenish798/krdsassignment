import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets:['latin'],
  weight:['400','700']
})

export const metadata = {
  title: "KRDS-Assignment",
  description: "Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {children}
      </body>
    </html>
  );
}
