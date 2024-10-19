import style from './Avaliation.module.css'

interface IName {
  name: string;
}

export default function AvaliationName({name}: IName) {
  return (
    <h4 className={style.ava_name}>{name}</h4>
  )
}