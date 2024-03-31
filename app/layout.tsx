import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import classNames from 'classnames'
import Link from 'next/link'
import { Navigation } from '@/app/ui'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: 'Дмитрий Н. | %s',
    default: 'Дмитрий Неклюдов',
  },
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, 'page')}>
        <header className="layoutHeader">
          <Link
            href="/"
            className="layoutHeader__logo">
            Mad Damon
          </Link>
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  )
}
