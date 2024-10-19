import style from './Avaliation.module.css'

interface IAvaImage {
  url: string;
}

export default function AvaliationImage({url}: IAvaImage) {
  return (
    <img
      className={style.ava_image}
      src={url}
      alt="Avaliation Image"
    />
  )
}