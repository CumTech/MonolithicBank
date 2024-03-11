import localFont from 'next/font/local'
import "./globals.css";
import { cn } from "@/lib/utils";

const fontKodeMono = localFont({
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
          "min-h-screen bg-background-default font-kode text-text-50",
          `${fontKodeMono.variable}`
        )}
      >
        {children}
      </body>
    </html>
  );
}
