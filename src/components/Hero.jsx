import { Eye, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <header id="inicio" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-md bg-yellow-400 text-black shadow-[0_0_30px_-5px_rgba(250,204,21,0.7)]">
            <Eye className="h-6 w-6" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold tracking-wider">Ominiosos</p>
            <p className="text-xs text-zinc-400">Sombra, Sátira e Sutileza</p>
          </div>
        </div>
        <ul className="hidden items-center gap-6 md:flex">
          <li><a href="#quem-somos" className="text-sm text-zinc-300 hover:text-yellow-400">Quem somos</a></li>
          <li><a href="#ofertas" className="text-sm text-zinc-300 hover:text-yellow-400">Produtos</a></li>
          <li><a href="#contato" className="text-sm text-zinc-300 hover:text-yellow-400">Contato</a></li>
        </ul>
      </nav>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-24 pt-10 md:grid-cols-2 md:pb-32">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/40 px-3 py-1 text-xs text-zinc-300">
            <Sparkles className="h-3.5 w-3.5 text-yellow-400" />
            Apresentando mundos com comédia melancólica
          </div>
          <h1 className="font-display text-4xl font-bold leading-[1.05] md:text-6xl">
            Ominiosos
            <span className="ml-3 inline-flex items-center gap-2 rounded-md bg-yellow-400 px-2 py-1 text-black shadow-[0_0_30px_-5px_rgba(250,204,21,0.7)]">
              S<Eye className="h-5 w-5" />S
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-zinc-300 md:text-lg">
            Entre o riso e o sussurro, criamos universos. Contos de fantasia, RPG de mesa, artigos, livros, lives e jogos — tudo com o nosso humor sombrio e coração acolhedor.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#ofertas" className="rounded-md bg-yellow-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300">
              Explorar produtos
            </a>
            <a href="#contato" className="rounded-md border border-zinc-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400">
              Fale conosco
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-0 rounded-2xl bg-gradient-to-br from-yellow-400/20 via-yellow-500/10 to-transparent blur-2xl" />
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 backdrop-blur">
            <div className="mx-auto grid max-w-sm place-items-center gap-4 text-center">
              <div className="grid h-28 w-28 place-items-center rounded-xl border border-zinc-800 bg-black">
                <Eye className="h-12 w-12 text-yellow-400" />
              </div>
              <p className="text-2xl font-semibold tracking-wider">
                SOS
                <span className="mx-1 align-middle text-yellow-400">•</span>
                O Olho observa
              </p>
              <p className="text-sm text-zinc-400">
                Nosso símbolo: S O S — com o "O" como um olho, e o último espelhado. Vigília, ironia e proteção em uma só marca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
