import { FC } from 'react'
import { ContactInfo } from '@/app/types'
import styles from './styles.module.css'

export const ContactInfoItem: FC<ContactInfo> = ({ title, text, href }) => (
  <div className={styles.contactInfoItem}>
    <span>{title}</span>
    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactInfoItem__link}>
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
)
