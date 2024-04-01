import { FC } from 'react'
import type { Metadata } from 'next'
import styles from './styles.module.css'

export const metadata: Metadata = {
  title: 'Обо мне',
}

const AboutPage: FC = () => (
  <main className={styles.content}>
    <h2 className={styles.content__title}>Дмитрий Неклюдов</h2>
    <p>Работаю фронтенд-разработчиком в компании Ай-Новус (I-Novus).</p>
    <p>
      Занимаюсь разработкой пользовательских интерфейсов, SPA, порталов,
      компонентов для ui-kit.
    </p>
    <p>
      Свободное время провожу с семьей. Увлекаюсь чтением книг, спортом. Люблю
      играть со своими кошками.
    </p>
    <p>
      Стараюсь постоянно расти профессионально. Пишу пет-проекты, прохожу курсы,
      помогающие мне изучить новые инструменты и технологии, углубить имеющиеся
      знания.
    </p>
    <p>
      На курсе Фронтенд-разработчик от Яндекс.Практикум я укрепил навыки
      верстки, основы React, основы бэкенда для фронтенда.
    </p>
    <p>
      На курсе Миддл фронтенд-разработчик от Karpov.Courses углубил знания по
      React, настройке, сборке проектов, оценке производительности,
      тестированию, деплою и другим инструментам и технологиям, без которых не
      обходится современный фронтенд.
    </p>
    <p>Мне нравится фронтенд потому, что для меня это:</p>
    <ul>
      <li>
        - возможности для развития, ограниченные только моей фантазией и моими
        способностями;
      </li>
      <li>
        - возможность создавать качественный, красивый и функциональный продукт,
        которым будут пользоваться тысячи и даже десятки тысяч людей;
      </li>
      <li>- возможность использовать и развивать мое творческое начало.</li>
    </ul>
  </main>
)

export default AboutPage
