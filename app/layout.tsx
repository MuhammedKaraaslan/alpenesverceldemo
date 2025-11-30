import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Toaster } from "@/components/ui/sonner"
import { WhatsAppButton } from "@/components/whatsapp-button"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Alpenes | Endüstriyel Kaya Delme Ekipmanları",
  description:
    "Atlas Copco, Epiroc ve Sandvik ürün gruplarında hızlı tedarik, geniş stok ve uzman destek. Madencilik ve inşaat sektörlerine profesyonel çözümler.",
  keywords: "kaya delme, madencilik ekipmanları, patlatma ekipmanları, Atlas Copco, Epiroc, Sandvik, yedek parça",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Toaster />
        <Analytics />
        <WhatsAppButton />
      </body>
    </html>
  )
}
