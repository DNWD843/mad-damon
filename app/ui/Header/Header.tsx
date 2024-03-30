import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import classNames from 'classnames'
import { Navigation } from '../Navigation'
import styles from './styles.module.css'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>

export const Header: FC<Props> = ({ className }) => (
  <header className={classNames(styles.header, className)}>
    <span className={styles.header__title}>Дмитрий Неклюдов</span>
    <Navigation />
  </header>
)
