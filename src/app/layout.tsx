import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import { ThemeProvider } from "@/components/ui/theme-provider"

import { ClerkProvider } from '@clerk/nextjs'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quikest',
  description: 'Created by Ajay Waghray & Aaron Kettl',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
