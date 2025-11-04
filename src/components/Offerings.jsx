import { Book, Dice5, ShoppingBag, Radio, Gamepad2, Sparkles } from "lucide-react";

const items = [
  {
    title: "Contos de Fantasia",
    desc: "Narrativas curtas e antologias que misturam ternura e trevas em doses certeiras.",
    icon: Book,
  },
  {
    title: "RPG de Mesa",
    desc: "Campanhas, one-shots, sistemas próprios e módulos com humor sombrio.",
    icon: Dice5,
  },
  {
    title: "Artigos e Acessórios",
    desc: "Dados, telas do mestre, cadernos, mapas e itens de colecionador.",
    icon: ShoppingBag,
  },
  {
    title: "Lives e Materiais Online",
    desc: "Mesas ao vivo, guias, assets e pacotes para mestres e jogadores.",
    icon: Radio,
  },
  {
    title: "Livros",
    desc: "Romances, bestiários e guias de mundo com arte e atmosfera única.",
    icon: Sparkles,
  },
  {
    title: "Jogos Eletrônicos e de Tabuleiro",
    desc: "Prototipagem, devlogs e títulos autorais com narrativa marcante.",
    icon: Gamepad2,
  },
];

export default function Offerings() {
  return (
    <section id="ofertas" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Produtos e experiências</h2>
          <p className="mt-2 max-w-2xl text-zinc-300">
            Tudo que criamos nasce para mesa, para tela e para estante — sempre fiel ao nosso estilo misterioso.
          </p>
        </div>
        <a
          href="#contato"
          className="hidden rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300 md:inline-block"
        >
          Quero conversar
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ title, desc, icon: Icon }) => (
          <div key={title} className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/60 p-6">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-yellow-400/10 blur-2xl transition-all duration-300 group-hover:bg-yellow-400/20" />
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-yellow-400 text-black">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-zinc-300">{desc}</p>
            <button className="mt-4 text-sm font-semibold text-yellow-400 hover:text-yellow-300">
              Saber mais →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
