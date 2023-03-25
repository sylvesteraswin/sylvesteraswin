import { Inter as FontSans } from "next/font/google"

import "@/styles/globals.css"
import { absoluteUrl, cn } from "@/lib/utils"
import Analytics from "@/components/analytics"
import TailwindIndicator from "@/components/tailwind-indicator"
import { Toaster } from "@/components/ui/toaster"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={cn(fontSans.variable)}>
      <head />
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50">
        {children}
        <Analytics />
        <TailwindIndicator />
        <Toaster />
      </body>
    </html>
  )
}
