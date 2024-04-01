import { FC } from 'react'
import type { Metadata } from 'next'
import { ContactInfo } from '@/app/types'
import { InfoItem } from '@/app/ui/'
import styles from './styles.module.css'

const contacts: ContactInfo[] = [
  {
    title: 'Telegram',
    text: '@mad_damon',
    href: 'https://t.me/mad_damon',
  },
  {
    title: 'LinkedIn',
    text: 'maddamon',
    href: 'https://linkedin.com/in/maddamon',
  },
  {
    title: 'Email',
    text: 'dmitriy.neklyudov@yandex.ru',
  },
  { title: 'GitHub', text: 'dnwd843', href: 'https://github.com/DNWD843' },
]

export const metadata: Metadata = {
  title: 'Контакты',
}

const ContactsPage: FC = () => {
  return (
    <main className={styles.contactsPage}>
      <h2>Контакты</h2>
      <ul className={styles.contacts}>
        {contacts.map((contact) => (
          <InfoItem
            key={contact.title}
            {...contact}
          />
        ))}
      </ul>
    </main>
  )
}

export default ContactsPage
