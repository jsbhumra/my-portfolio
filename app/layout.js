import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ height: '100dvh' }} suppressHydrationWarning>
      <head>
      <title>WhatsUp! (by JSBhumra)</title>
      <link rel="icon" href="/favicons/favicon_lg.svg" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
