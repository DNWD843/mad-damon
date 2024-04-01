import { FC } from 'react'
import type { Metadata } from 'next'
import styles from './styles.module.css'

export const metadata: Metadata = {
  title: 'Навыки',
}

const SkillsPage: FC = () => (
  <main className={styles.content}>
    <p>
      Основной стек: React, TypeScript, React-Context, Redux-Toolkit,
      react-hook-form, zod, REST API.
    </p>
    <p>
      Имею опыт работы с NextJS, Firebase, MobX, Final-form, Yup,
      OAuth2(keycloak).
    </p>
    <p>
      Работал с такими библиотеками компонентов, как material-ui, antd,
      bootstrap.
    </p>
    <p>
      Имею опыт разработки на NodeJS. Разрабатывал бэкенд с авторизацией на
      Express, Fastify.
    </p>
    <p>
      В ближайшем будушем планирую глубже погрузиться в NextJS, изучить NestJS.
    </p>
    <h3>Некоторые проекты, в которых принимал участие:</h3>
    <div className={styles.content__project}>
      <p className={styles.content__projectTitle}>
        Платформа клинических сервисов
      </p>
      <p>
        Задачи: создание компонентов на основое N2OFramework по макетам
        заказчика
      </p>
      <p>
        Стек: React, TypeScript, material-ui, N2OFramework (внутренний продукт
        компании)
      </p>
      <p>Роль: фронтенд-разработчик</p>
      <p>Срок: 9 месяцев</p>
    </div>
    <div className={styles.content__project}>
      <p className={styles.content__projectTitle}>
        Личный кабинет арбитражного управляющего
      </p>
      <p>
        Задачи: создание личного кабинета арбитражного управляющего -
        автоматизированной системы для работы с документами и данными от момента
        подачи заявки до принятия решения по объекту строительтсва
      </p>
      <p>
        Стек: React, TypeScript, react-context, react-hook-form, yup, ui-kit от
        заказчика
      </p>
      <p>Роль: фронтенд-разработчик</p>
      <p>Срок: 1 год 2 месяца</p>
    </div>
    <div className={styles.content__project}>
      <p className={styles.content__projectTitle}>
        План размещения сотрудников офиса
      </p>
      <p>
        Задачи: разработать сайт с планами этажей офиса и рассадки сотрудников,
        поиск сотрудника по ФИО и другим данным с указанием его рабочего места
        на плане, отображение данных выбранного сотрудника
      </p>
      <p>Стек:</p>
      <ul>
        <li>- фронтенд: React, TypeScript, react-context, zod.</li>
        <li>- бэкенд: NodeJS, Fastify, TypeScript, zod, OAuth2(keycloak)</li>
      </ul>

      <p>Роль: фуллстек-разработчик</p>
      <p>Срок: 2 месяца</p>
    </div>
    <div className={styles.content__project}>
      <p className={styles.content__projectTitle}>
        Портал Отраслевого ситуационного центра
      </p>
      <p>Задачи: разработка информационного портала</p>
      <p>Стек: NextJS, TypeScript, ui-kit от заказчика</p>
      <p>Роль: фронтенд-разработчик</p>
      <p>Срок: март 2024 - наст.время</p>
    </div>
  </main>
)

export default SkillsPage
