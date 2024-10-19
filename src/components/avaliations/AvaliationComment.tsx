import style from './Avaliation.module.css'

interface IDesc {
  desc: string;
}

export default function AvaliationComment({desc}: IDesc) {
  return (
    <p className={style.ava_desc}>{desc}</p>
  )
}