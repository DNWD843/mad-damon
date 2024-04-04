import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.content}>
        <h1 className={styles.content__title}>Дмитрий Неклюдов</h1>

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
          width={286 * 1.2}
          height={302 * 1.2}
          src="/avatar.png"
          alt="фото Дмитрий Неклюдов"
          className={styles.info__avatar}
        />
      </main>
    </>
  )
}
