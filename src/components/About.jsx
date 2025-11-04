export default function About() {
  return (
    <section id="quem-somos" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black to-transparent" />
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Quem somos</h2>
          <p className="mt-4 text-zinc-300">
            Somos a Ominiosos: uma casa de entretenimento que abraça a escuridão com um sorriso. Criamos, produzimos e
            distribuímos experiências que transitam entre a fantasia épica e a sátira familiar — histórias que aquecem o
            coração e cutucam o destino.
          </p>
          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-950/60 p-6">
            <h3 className="text-xl font-semibold text-white">Nossa missão</h3>
            <p className="mt-2 text-zinc-300">
              Inspirar coragem e curiosidade através de mundos imaginários. Cultivar mesas de RPG cheias de risos, livros que
              consolam e desafiam, e jogos que ressoam — sempre com o nosso tom misterioso e a comédia melancólica que nos define.
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Futuras ações</h3>
          <ul className="mt-4 space-y-3 text-zinc-300">
            <li className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-4">
              • Antologia "Crônicas do Olho": coletânea de contos de fantasia com tiradas sombriamente bem-humoradas.
            </li>
            <li className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-4">
              • Sistema próprio de RPG com licenças abertas, kits de iniciação e aventuras sazonais.
            </li>
            <li className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-4">
              • Lives semanais com mesas, leituras dramáticas e devlogs de jogos.
            </li>
            <li className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-4">
              • Jogo de tabuleiro cooperativo "Vigília do Sussurro" — estratégia, tensão e cumplicidade.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
