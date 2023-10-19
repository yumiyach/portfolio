import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk"

export type TWork = {
  title: string
  caption: string
  image: MicroCMSImage
  skills: TSkill[]
  description: string
  link: string
}

export type TSkill = {
  name: string
  image: MicroCMSImage
  description: string
  level: number
  visible: boolean
  category: 'front-end' | 'back-end' | 'other'
}

export type TProfile = {
  name: string
  imageUrl: string
  caption: string
  list: string[]
  links: {
    name: string
    iconUrl: string
    url: string
  }[]
}