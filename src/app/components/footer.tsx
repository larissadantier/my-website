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

        <button className="rounded-md border px-3 py-1 transition-all duration-200 ease-out hover:bg-zinc-800 text-base">
          Enviar Mensagem
        </button>
      </div>

      <div className="flex items-center justify-center border-t p-4 border-zinc-50 border-opacity-30 mt-2">
        Icons
      </div>
    </footer>
  )
}

export default Footer
