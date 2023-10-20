import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk"

export type TWork = {
  title: string
  caption: string
  image: MicroCMSImage
  skills: TSkill[]
  description: string
  url: string
}

export type TSkillCategory = 'front-end' | 'back-end' | 'others'

export type TSkill = {
  name: string
  image: MicroCMSImage
  description: string
  level: number
  visible: boolean
  category: TSkillCategory[],
  experiences: string[]
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