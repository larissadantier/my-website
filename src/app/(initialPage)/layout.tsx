import Link from 'next/link'
import { ReactNode } from 'react'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center py-6 px-6 flex-col gap-10">
      <div className='flex justify-between gap-6'>
        <Link href={'/'}>Home</Link>
        <h1>Em breve</h1>
      </div>

      {children}
    </div>
  )
}
