import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="rounded-md border-2 border-zinc-200 border-opacity-30">
      <div className="flex flex-col items-start gap-4 p-4">
        <div>
          <h1 className="text-xl">Vamos construir algo juntos?</h1>
          <span>
            Se você tem algum projeto em mente, sinta-se à vontade para me enviar
            uma mensagem.
          </span>
        </div>

        <a
          href='mailto:larissa_dantier@hotmail.com.br?subject=Gostaria de um Projeto!&body=Me fale mais sobre ele!'
          className="rounded-md border px-3 py-1 transition-all duration-200 ease-out hover:bg-zinc-800 text-base cursor-pointer"
        >
          Enviar Mensagem
        </a>
      </div>

      <div className="flex items-center justify-center border-t p-4 border-zinc-50 border-opacity-30 mt-2 gap-3">
        <Link href='https://www.linkedin.com/in/larissadantier/' target='_blank' className='border p-1 rounded-md bg-neutral-900 hover:bg-neutral-800 transition-all duration-200 ease-out'>
          <Linkedin size={20} strokeWidth={1.25} />
        </Link>

        <Link href='https://github.com/larissadantier' target='_blank' className='border p-1 rounded-md bg-neutral-900 hover:bg-neutral-800 transition-all duration-200 ease-out'>
          <Github size={20} strokeWidth={1.25} />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
