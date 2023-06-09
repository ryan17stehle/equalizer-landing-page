import './globals.css'
import { IBM_Plex_Sans } from 'next/font/google'

const ibm = IBM_Plex_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
 })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ibm.className}
       bg-offwhite bg-main-pattern-mobile bg-no-repeat bg-hero-position-mobile
        md:bg-main-pattern-tablet md:bg-hero-position-tablet`} >
        {children}
      </body>
    </html>
  )
}
