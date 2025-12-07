import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'राजस्थान में बर्फ का घर - दादी और बंदर की कहानी',
  description: 'एक जादुई कहानी - दादी और बंदर राजस्थान में बर्फ का घर बनाते हैं',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
