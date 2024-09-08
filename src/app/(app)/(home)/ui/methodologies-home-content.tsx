import Link from 'next/link'

export function MethodologiesHomeContent() {
  return (
    <section className="flex flex-col gap-3 rounded-lg bg-white p-10 shadow-xl">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-cyan-900 lg:mb-4 lg:text-4xl">
        Abordagem Metodológica
      </h2>
      <p className="mx-auto max-w-4xl text-justify text-base font-light text-stone-700 lg:text-lg">
        A pesquisa seguirá a abordagem metodológica do gênero epistêmico
        proposto por Gianna Pomata, caracterizada pela análise da produção de
        conhecimento e da construção de narrativas históricas.
      </p>
      <Link
        href="/methodologies"
        className="self-center rounded-sm bg-cyan-600 px-5 py-3 font-bold text-white shadow-md transition-colors hover:bg-cyan-500/80"
      >
        Ver conteúdo completo
      </Link>
    </section>
  )
}
