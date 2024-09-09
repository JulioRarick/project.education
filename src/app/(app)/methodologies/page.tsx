'use client'

import Link from 'next/link'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'

export default function Methodologies() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header otherPage />
      <main className="flex h-full w-full flex-1 flex-col items-center p-6 lg:p-10">
        <section className="w-full max-w-4xl space-y-6 text-justify">
          <h1 className="text-xl font-bold tracking-tighter text-cyan-800 lg:text-3xl">
            Abordagem Metodológica
          </h1>
          <p className="text-base lg:text-lg">
            Para aprofundar a análise e ampliar a abordagem metodológica, a
            pesquisa também incluirá a perspectiva de gênero epistêmico como
            proposta por Gianna Pomata, a fim de observar a forma como os
            documentos analisados — sejam eles oficiais ou didáticos — funcionam
            não apenas como registros históricos, mas também como veículos de
            produção e comunicação do conhecimento. O conceito de &quot;gênero
            epistêmico&quot;, ao tratar esses documentos como parte de uma
            prática cognitiva, permite investigar como esses textos são moldados
            por contextos históricos e como contribuem para a construção e
            legitimação de discursos sobre educação profissional e o mercado de
            trabalho durante o Estado Novo.
          </p>
          <p className="text-base lg:text-lg">
            {' '}
            Em conjunto, faremos o uso da metodologia historiográfica de Marc
            Bloch, conforme explorada em Apologia da História, será
            complementado com a análise crítica das fontes e suas
            inter-relações. Bloch defende a importância de compreender os fatos
            históricos em seu conjunto, o que será crucial para identificar as
            dinâmicas sociais e políticas que moldaram as narrativas
            educacionais e profissionais da época. Assim, documentos oficiais e
            discursos políticos serão examinados para revelar as intenções
            ideológicas por trás das políticas educacionais, enquanto os manuais
            didáticos serão estudados como ferramentas de disseminação de um
            conhecimento específico que reforçava o ideário do Estado Novo sobre
            o trabalho e a formação profissional.
          </p>
          <p className="text-base lg:text-lg">
            Ao integrar essas metodologias, a pesquisa buscará problematizar as
            práticas de conhecimento envolvidas, destacando como essas práticas
            moldaram tanto a educação quanto o mercado de trabalho no período.
            Isso permitirá uma análise mais rica das continuidades e rupturas no
            processo de construção do saber, especialmente em um contexto
            autoritário. No qual, observamos que o controle ideológico sobre a
            educação e o trabalho estava diretamente ligado à formação de uma
            &quot;nova&quot; identidade nacional.
          </p>
        </section>
        <p className="pb-2 pt-4 text-center text-xs font-semibold text-emerald-700 lg:text-base">
          Veja o artigo do Prof. Dr. Tiago Santos Almeida, docente na UnB, sobre
          &quot;Gênero epistêmico&quot; de Gianna Pomata
        </p>
        <Link
          href="https://www.scielo.br/j/hh/a/DnTVr63TsKfq5PP4PPYnqqr/#"
          target="_blank"
        >
          <p className="rounded-md bg-stone-100 px-5 py-3 text-sm font-medium text-cyan-600 shadow-md hover:bg-white lg:text-base">
            Clique aqui para acessar o artigo
          </p>
        </Link>
        <Link href="/">
          <p className="mt-8 text-lg font-semibold text-cyan-800 hover:underline">
            Voltar para a Página Inicial
          </p>
        </Link>
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}
