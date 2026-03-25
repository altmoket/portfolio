

export type Project = {
  id: number
  title: string
  description: string
  images?: string[]
  tags: string[]
  live?: string
  github: string
  featured?: boolean
}