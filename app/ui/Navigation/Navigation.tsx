'use client'

import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import styles from './styles.module.css'

const navLinks = [
  { href: '/my/info', name: 'Обо мне' },
  { href: '/my/portfolio', name: 'Портфолио' },
  { href: '/my/contacts', name: 'Контакты' },
]

export const Navigation: FC = () => {
  const pathname = usePathname()

  return (
    <ul className={styles.navigation}>
      {navLinks.map(({ href, name }) => (
        <li key={href}>
          <Link
            href={href}
            className={classNames(styles.navigation__link, {
              [styles.navigation__link_active]: pathname === href,
            })}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
