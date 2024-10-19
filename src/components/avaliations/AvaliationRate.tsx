import { BsStarFill } from 'react-icons/bs'
import style from './Avaliation.module.css'

export default function AvaliationRate() {
  const rate = [1,2,3,4,5]
  return (
    <div className={style.ava_rate}>
      {rate.map((_, index) => (
        <i key={index}><BsStarFill/></i>
      ))}
    </div>
  )
}