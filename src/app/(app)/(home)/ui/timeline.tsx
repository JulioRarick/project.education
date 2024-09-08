export function Timeline() {
  return (
    <section
      id="timeline"
      className="rounded-lg bg-gradient-to-r from-cyan-900 via-cyan-800 to-cyan-900 p-4 shadow-xl lg:p-10"
    >
      <h2 className="mb-2 text-center text-2xl font-bold tracking-tight text-white lg:mb-4 lg:text-4xl">
        Cronograma de Trabalho
      </h2>
      <div className="flex items-center justify-center overflow-hidden rounded-md">
        <table className="h-full w-full table-auto overflow-hidden border-0 border-hidden bg-white text-left">
          <thead className="w-full bg-cyan-600 text-center">
            <tr>
              <th className="px-4 py-2 font-semibold text-stone-50">Etapa</th>
              <th className="px-4 py-2 font-semibold text-stone-50">Período</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2 text-stone-700">
                Revisão bibliográfica
              </td>
              <td className="border px-4 py-2 text-stone-700">
                Setembro a Outubro de 2024
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-stone-700">
                Coleta e análise de fontes
              </td>
              <td className="border px-4 py-2 text-stone-700">
                Novembro de 2024 a Janeiro de 2025
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-stone-700">
                Análise de manuais didáticos
              </td>
              <td className="border px-4 py-2 text-stone-700">
                Dezembro de 2024 a Fevereiro de 2025
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 text-stone-700">
                Redação do capítulo teórico
              </td>
              <td className="border px-4 py-2 text-stone-700">
                Fevereiro a Março de 2025
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
