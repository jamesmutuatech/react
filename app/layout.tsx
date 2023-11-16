import type { Metadata } from 'next'

import './globals.css'



export const metadata: Metadata = {
  title: 'Travel Website',
  description: 'Created travel website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        {children}
      
      </body>
    </html>
  )
}
