import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="grid grid-cols-12 gap-4 min-h-screen items-start justify-between bg-stone-900 pt-16 px-32">
          {children}
        </main>
      </body>
    </html>
  )
}
