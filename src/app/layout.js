import { Inter, Libre_Baskerville, Charm } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export const libre = Libre_Baskerville({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
  display: 'swap',
})

export const charm = Charm({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Lily Restaurant',
  description: 'The best food to your better day',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='min-w-[320px]'>
      <body className={libre.className}>{children}</body>
    </html>
  )
}
