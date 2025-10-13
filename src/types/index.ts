export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  image?: string
  github?: string
  demo?: string
  featured?: boolean
}

export type Skill = {
  name: string
  category: 'frontend' | 'backend' | 'mobile' | 'design' | 'tools' | 'soft'
  level?: number
  icon?: string
}

export type SocialLink = {
  name: string
  url: string
  icon: string
}

export type ContactForm = {
  name: string
  email: string
  message: string
}

export type PersonalInfo = {
  name: string
  title: string
  bio: string
  location: string
  email: string
  availableForWork: boolean
}