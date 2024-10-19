import { ICard } from './Index'
import style from './Card.module.css'

export default function CardDescription({description}: ICard) {
  return (
    <p className={style.card_desc}>{description}</p>
  )
}