import React from 'react'
import CardTitle from './CardTitle'
import CardDescription from './CardDescription'
import CardRoot from './CardRoot'
import CardIcon from './CardIcon'

export interface ICard {
  title?: string,
  description?: string,
  icon?: React.ReactNode,
  children?: React.ReactNode,
}

export const Card = {
  Title: CardTitle,
  Description: CardDescription,
  Root: CardRoot,
  Icon: CardIcon,
}