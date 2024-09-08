import Link from 'next/link'

export function ReferencesHomeContent() {
  return (
    <section className="flex flex-col gap-3 rounded-lg bg-white p-10 shadow-xl">
      <h2 className="mb-2 text-center text-2xl font-bold tracking-tight text-cyan-900 lg:mb-4 lg:text-4xl">
        Referencial Teórico
      </h2>
      <ul className="space-y-3 pb-2 text-stone-700">
        <li className="text-sm font-light lg:text-lg">
          <span className="font-semibold">Ângela de Castro Gomes:</span> “A
          invenção do trabalhismo”
        </li>
        <li className="text-sm font-light lg:text-lg">
          <span className="font-semibold">Maria Celina D’Araújo (Org.):</span>{' '}
          “As instituições brasileiras da Era Vargas”
        </li>
        <li className="text-sm font-light lg:text-lg">
          <span className="font-semibold">
            Jorge Ferreira e Lucília de Almeida Neves Delgado (Orgs.):
          </span>{' '}
          “O Brasil republicano, v. 2”
        </li>
        <li className="text-sm font-light lg:text-lg">
          <span className="font-semibold">Dermeval Saviani:</span> “Trabalho e
          educação: fundamentos ontológicos e históricos”
        </li>
      </ul>
      <Link
        href="/references"
        className="self-center rounded-sm bg-cyan-600 px-5 py-3 font-bold text-white shadow-md transition-colors hover:bg-cyan-500/80"
      >
        Ver conteúdo completo
      </Link>
    </section>
  )
}
