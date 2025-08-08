import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppProvider } from "@/contexts/app-context"
import BottomNav from "@/components/bottom-nav"
import ControlPanel from "@/components/control-panel"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KavachX - Disaster Intelligence & Recovery",
  description: "India's disaster intelligence and recovery platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AppProvider>
            <div className="flex flex-col min-h-screen bg-background">
              <ControlPanel />
              <main className="flex-1 pb-16">{children}</main>
              <BottomNav />
            </div>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
