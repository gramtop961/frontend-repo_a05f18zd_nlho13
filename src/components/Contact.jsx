import { Mail, MapPin, Send, Eye } from "lucide-react";

export default function Contact() {
  const handleIdeaSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nome = form.get("nome");
    const ideia = form.get("ideia");
    const subject = encodeURIComponent(`Ideia para Ominiosos — ${nome || "Anônimo"}`);
    const body = encodeURIComponent(ideia || "Minha ideia:");
    window.location.href = `mailto:contato@ominiosos.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contato" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Onde nos achar</h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-950/60 p-4">
              <MapPin className="mt-1 h-5 w-5 text-yellow-400" />
              <div>
                <p className="font-medium text-white">Presença digital</p>
                <p className="text-sm text-zinc-300">Instagram, YouTube, Twitch e Itch.io — procure por @Ominiosos</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-zinc-800 bg-zinc-950/60 p-4">
              <Mail className="mt-1 h-5 w-5 text-yellow-400" />
              <div>
                <p className="font-medium text-white">Contato direto</p>
                <a href="mailto:contato@ominiosos.com" className="text-sm text-yellow-400 hover:text-yellow-300">
                  contato@ominiosos.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-zinc-800 bg-zinc-950/60 p-6">
            <h3 className="text-xl font-semibold text-white">Envie suas ideias</h3>
            <p className="mt-2 text-zinc-300">Conte-nos um conceito de conto, um item mágico, um vilão carismático… ouvimos tudo.</p>
            <form onSubmit={handleIdeaSubmit} className="mt-4 space-y-3">
              <input
                name="nome"
                type="text"
                placeholder="Seu nome"
                className="w-full rounded-md border border-zinc-800 bg-black px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none"
              />
              <textarea
                name="ideia"
                required
                rows={5}
                placeholder="Compartilhe sua ideia"
                className="w-full rounded-md border border-zinc-800 bg-black px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-yellow-400 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-black transition hover:bg-yellow-300"
              >
                <Send className="h-4 w-4" /> Enviar por e-mail
              </button>
            </form>
            <p className="mt-3 text-xs text-zinc-500">
              Ao enviar, abriremos seu aplicativo de e-mail com a mensagem pronta. Responderemos assim que o Olho piscar.
            </p>
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
            <div className="absolute -inset-10 -z-0 rounded-full bg-yellow-400/10 blur-3xl" />
            <div className="relative">
              <div className="mb-4 flex items-center gap-2">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-yellow-400 text-black">
                  <Eye className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold text-white">Manifesto Ominiosos</h3>
              </div>
              <p className="text-zinc-300">
                Não tememos o escuro — nele, encontramos histórias. Entre piadas que doem e abraços que curam, nossas criações
                buscam companhia: a sua. Sente-se à mesa, abra o livro, ligue o jogo. O Olho vê, mas também ri.
              </p>
            </div>
          </div>

          <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-800 pt-6 text-sm text-zinc-400 md:flex-row">
            <p>© {new Date().getFullYear()} Ominiosos. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#inicio" className="hover:text-yellow-400">Início</a>
              <a href="#quem-somos" className="hover:text-yellow-400">Quem somos</a>
              <a href="#ofertas" className="hover:text-yellow-400">Produtos</a>
              <a href="#contato" className="hover:text-yellow-400">Contato</a>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
