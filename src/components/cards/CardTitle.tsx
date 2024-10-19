import { ICard } from './Index'
import style from './Card.module.css'

export default function CardTitle({title}: ICard) {
  return <h3 className={style.card_title}>{title}</h3>
}