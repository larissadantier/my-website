import { randomUUID } from 'crypto'

export interface TechsProps {
  id: string
  text: string
}

export const techs: TechsProps[] = [
  {
    id: randomUUID(),
    text: 'HTML',
  },
  {
    id: randomUUID(),
    text: 'CSS',
  },
  {
    id: randomUUID(),
    text: 'JavaScript',
  },
  {
    id: randomUUID(),
    text: 'TypeScript',
  },
  {
    id: randomUUID(),
    text: 'ReactJS',
  },
  {
    id: randomUUID(),
    text: 'React Native',
  },
  {
    id: randomUUID(),
    text: 'NextJS',
  },
  {
    id: randomUUID(),
    text: 'Styled Components',
  },
  {
    id: randomUUID(),
    text: 'Material UI',
  },
  {
    id: randomUUID(),
    text: 'Tailwind CSS',
  },
  {
    id: randomUUID(),
    text: 'Ant Design',
  },
  {
    id: randomUUID(),
    text: 'Jest',
  },
  {
    id: randomUUID(),
    text: 'Testing Library',
  },
  {
    id: randomUUID(),
    text: 'Storybook',
  },
]
