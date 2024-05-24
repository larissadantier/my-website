import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type TagRootGenericProps<T = unknown> = {
  children: ReactNode
  className?: string
} & T

export function TagRoot({ children, className }: TagRootGenericProps) {
  return (
    <div
      className={cn([
        'flex select-none items-center justify-center rounded-md border border-zinc-500 bg-neutral-900 px-3 py-1',
        className,
      ])}
    >
      {children}
    </div>
  )
}

export function TagTitle({ text }: { text: string }) {
  return <span className="text-zinc-50">{text}</span>
}
