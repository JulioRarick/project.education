export function Objectives() {
  return (
    <section id="objectives" className="grid gap-12 lg:grid-cols-2">
      <div>
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-stone-900 lg:text-4xl">
          Tema e Objeto de Estudo
        </h2>
        <p className="text-base text-stone-600">
          Educação e trabalho no Estado Novo.
        </p>
        <div className="mt-6">
          <h3 className="mb-4 text-2xl font-semibold tracking-tight text-cyan-800">
            Objetivo Geral
          </h3>
          <p className="text-stone-700">
            Analisar como eram organizadas as formas de trabalho no Estado Novo
            e como o processo educacional influenciava nesse contexto, com
            ênfase no papel das instituições de formação profissional criadas
            durante o período.
          </p>
        </div>
      </div>
      <div>
        <h3 className="mb-4 text-2xl font-semibold tracking-tight text-cyan-800">
          Objetivos Específicos
        </h3>
        <ul className="ml-8 list-disc space-y-2 pr-4 text-justify text-base text-stone-700">
          <li>
            Investigar a criação do Sistema S (SENAI, SENAC) e sua relação com o
            mercado de trabalho.
          </li>
          <li>
            Avaliar o impacto na estruturação das relações de trabalho e no
            desenvolvimento econômico e educacional do Brasil, durante o Estado
            Novo.
          </li>
        </ul>
      </div>
    </section>
  )
}
