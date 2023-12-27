import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rock, Paper, Scissors',
  description: 'Challenge from Frontend Mentor',
  icons: {
    icon: '/icon.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-barlow-semi-condensed'>
        {children}
      </body>
    </html>
  )
}
