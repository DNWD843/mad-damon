import { FC } from 'react'
import { ContactInfo } from '@/app/types'
import styles from './styles.module.css'

export const InfoItem: FC<ContactInfo> = ({ title, text, href }) => (
  <div className={styles.infoItem}>
    <span>{title}</span>
    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.infoItem__link}>
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
)
