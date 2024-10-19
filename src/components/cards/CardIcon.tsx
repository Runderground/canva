import { ICard } from './Index'
import style from './Card.module.css'

export default function CardIcon({icon}: ICard) {
  return (
    <i className={style.card_icon}>{icon}</i>
  )
}