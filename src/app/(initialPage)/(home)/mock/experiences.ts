import { Month } from '@/lib/month'
import { randomUUID } from 'crypto'
import { TechsProps } from './techs'

interface ExperienceProps {
  id: string
  title: string,
  subtitle: string,
  description: string
  time: {
    startDate: { year: string, month: Month },
    endDate?: { year?: string, month?: Month }
  }
  techs: TechsProps[]
}

export const experiences: ExperienceProps[] = [
  {
    id: randomUUID(),
    title: 'ISH Tecnologia',
    subtitle: 'Front-Developer',
    description: 'Faço parte do desenvolvimento do produto Vision com o alinhamento de prioridades de segurança para a visão de negócio através do monitoramento e respostas a ataques cibernéticos com gráficos informativos, protegendo ativos e sistemas digitais, dessa forma podendo tomar decisões mais informadas e estratégicas.',
    time: {
      startDate: { year: '2024', month: Month.Abr }
    },
    techs: [
      {
        id: randomUUID(),
        text: 'HTML'
      },
      {
        id: randomUUID(),
        text: 'CSS'
      },
      {
        id: randomUUID(),
        text: 'JavaScript'
      },
      {
        id: randomUUID(),
        text: 'TypeScript'
      },
      {
        id: randomUUID(),
        text: 'ReactJS'
      },
      {
        id: randomUUID(),
        text: 'NextJS'
      },
      {
        id: randomUUID(),
        text: 'Saas'
      },
      {
        id: randomUUID(),
        text: 'Ant Design'
      },
      {
        id: randomUUID(),
        text: 'Apexcharts'
      },
    ]
  },
  {
    id: randomUUID(),
    title: 'Sambatech',
    subtitle: 'Front-Developer',
    description: 'Contribui para o desenvolvimento de uma plataforma focada na área da educação com cursos (mídias como vídeos aulas e quizzes), eventos e entre outros para a John Deere capacitar seus funcionários e usuários comuns com temas de agronegócio, com foco no web responsivo.',
    time: {
      startDate: { year: '2023', month: Month.Set },
      endDate: { year: '2024', month: Month.Abr }
    },
    techs: [
      {
        id: randomUUID(),
        text: 'HTML'
      },
      {
        id: randomUUID(),
        text: 'CSS'
      },
      {
        id: randomUUID(),
        text: 'JavaScript'
      },
      {
        id: randomUUID(),
        text: 'TypeScript'
      },
      {
        id: randomUUID(),
        text: 'ReactJS'
      },
      {
        id: randomUUID(),
        text: 'Material UI'
      },
      {
        id: randomUUID(),
        text: 'TanStack Query'
      },
      {
        id: randomUUID(),
        text: 'React Router Dom'
      },
      {
        id: randomUUID(),
        text: 'React Hook Form'
      },
      {
        id: randomUUID(),
        text: 'Zod'
      },
      {
        id: randomUUID(),
        text: 'Docker'
      },
    ]
  },
  {
    id: randomUUID(),
    title: 'ISH Tecnologia',
    subtitle: 'Front-Developer',
    description: 'Faço parte do desenvolvimento do produto Vision com o alinhamento de prioridades de segurança para a visão de negócio através do monitoramento e respostas a ataques cibernéticos com gráficos informativos, protegendo ativos e sistemas digitais, dessa forma podendo tomar decisões mais informadas e estratégicas.',
    time: {
      startDate: { year: '2024', month: Month.Abr }
    },
    techs: [
      {
        id: randomUUID(),
        text: 'HTML'
      },
      {
        id: randomUUID(),
        text: 'CSS'
      },
      {
        id: randomUUID(),
        text: 'JavaScript'
      },
      {
        id: randomUUID(),
        text: 'TypeScript'
      },
      {
        id: randomUUID(),
        text: 'ReactJS'
      },
      {
        id: randomUUID(),
        text: 'NextJS'
      },
      {
        id: randomUUID(),
        text: 'Saas'
      },
      {
        id: randomUUID(),
        text: 'Ant Design'
      },
      {
        id: randomUUID(),
        text: 'Apexcharts'
      },
    ]
  },
]
