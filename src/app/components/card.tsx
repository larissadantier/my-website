import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Month, renderMonth } from '@/lib/month'

export type CardRootGenericProps<T = unknown> = {
  children: ReactNode
  className?: string
} & T

export function CardRoot({ children, className }: CardRootGenericProps) {
  return (
    <div
      className={cn([
        'flex flex-col gap-4 rounded-md border border-zinc-500 p-4 ',
        className,
      ])}
    >
      {children}
    </div>
  )
}

export function CardTitle({ title }: { title: string }) {
  return (
    <p className="text-zinc-50 text-xl font-bold">{title}</p>
  )
}

export function CardTime({ year, month }: { year?: string, month?: Month }) {
  return (
    <p className="text-zinc-50 text-xl font-bold">{year && month ? `${renderMonth(month)}/${year}` : 'Presente'}</p>
  )
}

export function CardSubTitle({ subtitle }: { subtitle: string }) {
  return (
    <p className="text-zinc-50 text-lg font-medium">{subtitle}</p>
  )
}

export function CardDescription({ description, className }: { description: string, className?: string }) {
  return <div className={cn(className)}><span className={'text-zinc-50 text-base text-opacity-75'}>{description}</span></div>
}
