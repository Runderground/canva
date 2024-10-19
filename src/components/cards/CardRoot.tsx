import { ICard } from './Index'
import style from './Card.module.css'

export default function CardRoot({children}: ICard) {
  return (
    <div className={style.card_container}>
      {children}
    </div>  
  )
}