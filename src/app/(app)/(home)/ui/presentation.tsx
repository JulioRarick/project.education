import Image from 'next/image'

import flagUnb from '@/images/flag-unb.png'
export function Presentation() {
  return (
    <section
      id="presentation"
      className="flex flex-col items-center lg:flex-row lg:space-x-10 lg:px-2"
    >
      <div className="mb-8 flex flex-col items-start justify-start gap-1 lg:w-1/2">
        <Image
          src={flagUnb}
          width={200}
          height={200}
          quality={50}
          alt="Bandeira Universidade de Brasília - UNB"
          className="w-28 self-center shadow-lg"
        />
        <h2 className="self-center py-2 font-semibold tracking-tight text-emerald-800">
          Faculdade de Educação | FE
        </h2>
        <h3 className="text-lg font-semibold tracking-tight text-stone-800">
          Educação e Trabalho
        </h3>
        <h4 className="text-sm font-light tracking-wide text-stone-800">
          Docente: Caetana Juracy Rezende Silva
        </h4>
        <h4 className="text-sm font-light tracking-wide text-stone-800">
          Discente: Júlio Rarick Lopes Bogalho
        </h4>
      </div>
      <div className="mb-8 lg:mb-0 lg:w-1/2">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
          Apresentação
        </h2>
        <p className="text-justify text-lg text-gray-600">
          A motivação para este projeto de pesquisa surge da necessidade de
          compreender as complexas relações entre educação e trabalho no
          contexto do Estado Novo (1937-1945), um período marcado pela
          centralização do poder e pela implementação de políticas que visavam à
          modernização do Brasil.
        </p>
      </div>
    </section>
  )
}
