import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'

import NavBar from './NavBar'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NFT Tracker',
  description: 'Next level NFT tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar/>
        {children}</body>
    </html>
  )
}
