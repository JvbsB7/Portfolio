import type { Project, Skill, SocialLink } from '../types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Prompt Manager',
    description: 'Aplicação web para organizar e gerenciar prompts de IA em um só lugar. Cadastre, edite e busque seus prompts rapidamente, aumentando sua produtividade. Desenvolvido durante evento da Rocketseat.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Rocketseat'],
    image: '/projects/prompt-manager.png',
    github: 'https://github.com/JvbsB7/nlw-pocket-rocketseat',
    featured: true,
  },
  {
    id: '2',
    title: 'Lista de Compras',
    description: 'Aplicativo mobile para gerenciar listas de compras. Projeto de aprendizado em React Native seguindo curso atualizado de 2025, com foco em desenvolvimento mobile moderno e boas práticas.',
    tags: ['React Native', 'TypeScript', 'Expo', 'Em Desenvolvimento'],
    image: '/projects/lista-compras.png',
    github: 'https://github.com/JvbsB7/App-RocketSeat---2025',
    featured: false,
  },
]

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', category: 'frontend', level: 90 },
  { name: 'CSS3', category: 'frontend', level: 75 },
  { name: 'JavaScript', category: 'frontend', level: 70 },
  { name: 'React', category: 'frontend', level: 50 },
  { name: 'TypeScript', category: 'frontend', level: 25 },
  
  // Mobile
  { name: 'React Native', category: 'mobile', level: 25 },
  { name: 'Flutter', category: 'mobile', level: 30 },
  
  // Design
  { name: 'Figma', category: 'design', level: 30 },
  
  // Backend & Database
  { name: 'SQL', category: 'backend', level: 20 },
  { name: 'C#', category: 'backend', level: 35 },
  
  // Tools
  { name: 'Git', category: 'tools', level: 25 },
  { name: 'GitHub', category: 'tools', level: 30 },
  
  // Soft Skills
  { name: 'Organização', category: 'soft', level: 90 },
  { name: 'Comunicação', category: 'soft', level: 75 },
  { name: 'Trabalho em Equipe', category: 'soft', level: 85 },
  { name: 'Resolução de Problemas', category: 'soft', level: 85 },
]

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/JvbsB7',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'www.linkedin.com/in/joão-vitor-417696261',
    icon: 'linkedin',
  },
  {
    name: 'Email',
    url: 'jvbrito72@gmail.com',
    icon: 'mail',
  },
]

// Informações pessoais
export const personalInfo = {
  name: 'João Vitor de Brito Silva',
  title: 'Desenvolvedor Front-End',
  bio: 'Desenvolvedor Front-End em formação, cursando Ciências da Computação na UNIMAR. Experiência em React, React Native, Flutter e JavaScript.',
  location: 'Marília, São Paulo, BR',
  email: 'jvbrito72@gmail.com',
  availableForWork: true,
  university: 'UNIMAR',
  course: 'Ciências da Computação',
  period: '2023 - 2026',
}