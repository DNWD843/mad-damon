import Image from 'next/image'
import styles from './page.module.css'
import { Navigation } from '@/app/ui'

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.header__logo}>Mad Damon</span>
        <Navigation />
      </header>
      <main className={styles.content}>
        <h1 className={styles.content__title}>Дмитрий Неклюдов</h1>
        <div className={styles.info}>
          <div className={styles.info__description}>
            <p className={styles.info__text}>
              Фронтенд-разработчик в компании I-Novus.
            </p>
            <p className={styles.info__text}>
              Занимаюсь разработкой порталов, SPA, пользовательских интерфейсов,
              компонентов для ui-kit.
            </p>
          </div>

          <Image
            width={286}
            height={302}
            src="/avatar.png"
            alt="фото Дмитрий Неклюдов"
            className={styles.info__avatar}
          />
        </div>
      </main>
    </>
  )
}
