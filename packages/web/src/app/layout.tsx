import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import { TooltipProvider } from "@/components/ui/tooltip"
import { SynthProvider } from "@/lib/synth-context"
import "./globals.css"

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "SOLDERPUNK - DSI Tempest Explorer",
  description: "Interactive synth panel explorer for the Dave Smith Instruments Tempest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jetbrains.variable} h-full`}>
      <body className="min-h-full flex flex-col" style={{ fontFamily: 'var(--font-jetbrains), monospace' }}>
        <TooltipProvider>
          <SynthProvider>
            {children}
          </SynthProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}
