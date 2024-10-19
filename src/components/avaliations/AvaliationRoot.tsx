import React from 'react'
import style from './Avaliation.module.css'

interface IRoot {
  children?: React.ReactNode;
}

export default function AvaliationRoot({children}: IRoot) {
  return (
    <div className={style.ava_content}>
      {children}
    </div>
  )
}