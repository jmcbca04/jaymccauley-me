import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://jaymccauley.me'),
  title: 'Jay McCauley',
  description: 'Personal website of Jay McCauley',
  openGraph: {
    title: 'Jay McCauley',
    description: 'Personal website of Jay McCauley',
    url: 'https://jaymccauley.me',
    siteName: 'Jay McCauley',
    images: [
      {
        url: '/jaymccauley-og.png',
        width: 1200,
        height: 630,
        alt: 'Jay McCauley',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jay McCauley',
    description: 'Personal website of Jay McCauley',
    images: ['/jaymccauley-og.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} min-h-screen bg-base-100 text-base-content`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
