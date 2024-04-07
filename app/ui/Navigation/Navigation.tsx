'use client'

import { FC, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'
import { BurgerMenuIcon, CloseIcon } from '@/app/images'
import { useClickOutside } from '@/app/hooks'
import styles from './styles.module.css'

const navLinks = [
  { href: '/about', name: 'Обо мне' },
  { href: '/skills', name: 'Навыки' },
  { href: '/contacts', name: 'Контакты' },
]

const renderNavLinks = (pathname: string, onClick?: () => void) => (
  <ul className={styles.navigation__linksList}>
    {navLinks.map(({ href, name }) => (
      <li key={href}>
        <Link
          href={href}
          onClick={onClick}
          className={classNames(styles.navigation__link, {
            [styles.navigation__link_active]: pathname === href,
          })}>
          {name}
        </Link>
      </li>
    ))}
  </ul>
)

export const Navigation: FC = () => {
  const pathname = usePathname()
  const [isOpened, setOpened] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const toggleMenu = () => {
    setOpened((prev) => !prev)
  }

  useClickOutside(mobileMenuRef, () => setOpened(false))

  return (
    <div className={styles.navigation}>
      <div className={styles.navigation_desktop}>
        {renderNavLinks(pathname)}
      </div>

      <div
        className={styles.navigation_mobile}
        ref={mobileMenuRef}>
        <button
          type="button"
          onClick={toggleMenu}
          className={styles.navigation__burgerMenuButton}>
          {isOpened ? <CloseIcon /> : <BurgerMenuIcon />}
        </button>
        {isOpened && (
          <div className={styles.mobileNavigation__dropdown}>
            {renderNavLinks(pathname, () => setOpened(false))}
          </div>
        )}
      </div>
    </div>
  )
}
