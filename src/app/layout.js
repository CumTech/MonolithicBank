import { Groteska, KodeMono } from "next/font/local"
import "./globals.css";
import { cn } from "@/utils/cn";

const fontGroteska = Groteska({
  src: [
    {
      path: '../../public/fonts/Groteska-Thin.woff2',
      weight: '100',
      style: 'light',
    },
    {
      path: '../../public/fonts/Groteska-Light.woff2',
      weight: '300',
      style: 'thin',
    },
    {
      path: '../../public/fonts/Groteska-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Groteska-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Groteska-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/Groteska-Black.woff2',
      weight: '900',
      style: 'black',
    },
  ],
  display: "swap",
  variable: "--font-groteska",
})

const fontKodeMono = KodeMono({
  src: "../../public/fonts/KodeMono-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-kode",
})

export const metadata = {
  title: "Blosthex",
  description: "The new era of banking is here. Blosthex is a digital bank that offers a range of financial services including savings, investments, and loans. Blosthex is a digital bank that offers a range of financial services including savings, investments, and loans.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          `${fontGroteska.variable} ${fontKodeMono.variable}`
        )}
      >{children}</body>
    </html>
  );
}
