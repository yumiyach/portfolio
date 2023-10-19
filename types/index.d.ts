export type TWork = {
  title: string
  caption: string
  imageUrl: string
  tags: string[]
  description: string
  link: string
}

export type TSkill = {
  name: string
  imageUrl: string
  description: string
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