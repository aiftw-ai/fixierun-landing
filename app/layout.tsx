import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/frontend/context/auth'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FixieRun',
  description: 'Web3 Fitness Gaming Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
