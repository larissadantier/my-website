import Footer from '@/app/components/footer'
import { techs } from './mock/techs'
import { TagRoot, TagTitle } from '@/app/components/tag'
import { CardDescription, CardRoot, CardSubTitle, CardTime, CardTitle } from '@/app/components/card'
import { experiences } from './mock/experiences'

function TextBold({ text }: { text: string }) {
  return <strong className='text-zinc-50 text-opacity-100'>{text}</strong>
}

function Home() {
  return (
    <div className="flex max-w-[1280px] flex-col gap-6">
      <section className="flex flex-col gap-3">
        <h1 className="text-zinc-50 text-4xl font-semibold">
          Olá, eu sou a Larissa - Front-end Developer
        </h1>

        <p className='text-zinc-50 text-opacity-75 text-lg'>
          Comecei a programar em 2020 com <TextBold text='JavaScript e TypeScript' />. Atualmente,
          sou Desenvolvedora Front-end na <TextBold text='ISH' /> e meu foco principal é construir {''}
          <TextBold text='interfaces de usuários' /> onde a ponte de {''}
          <TextBold text='design e código' /> se encontram. Quando não estou no computador, {''}
          <TextBold text='gosto de jogar' />, assistir filmes/séries, {''}
          <TextBold text='comer comida japonesa' /> e tomar chá.
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-4">
        {techs.map((item) => (
          <TagRoot key={item.id}>
            <TagTitle text={item.text} />
          </TagRoot>
        ))}
      </section>

      <section className='grid gap-4 lg:grid-cols-2 sm:grid-cols-1'>
        {experiences.map(item => (
          <CardRoot key={item.id}>
            <div>
              <div className='flex justify-between flex-col md:flex-row'>
                <CardTitle title={item.title} />
                <div className='flex gap-2'>
                  <CardTime month={item.time.startDate.month} year={item.time.startDate.year} />
                  <span className='text-zinc-50 text-xl font-bold'>-</span>
                  {item.time.endDate && <CardTime month={item.time.endDate.month} year={item.time.endDate.year} />}
                  {!item.time.endDate && <CardTime />}
                </div>
              </div>

              <CardSubTitle subtitle={item.subtitle} />

              <CardDescription description={item.description} className='mt-2' />
            </div>

            <div className='flex gap-4 items-center flex-wrap mt-auto'>
              {item.techs.map(tech => (
                <TagRoot key={tech.id}>
                  <TagTitle text={tech.text} />
                </TagRoot>
              ))}
            </div>
          </CardRoot>
        ))}
      </section>

      <Footer />
    </div>
  )
}

export default Home
