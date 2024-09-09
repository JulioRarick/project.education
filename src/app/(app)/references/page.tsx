'use client'

import Link from 'next/link'
import {
  FaBook,
  FaBuilding,
  FaChalkboardTeacher,
  FaCogs,
  FaEye,
  FaGlobe,
  FaSearch,
} from 'react-icons/fa'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ScrollToTopButton } from '@/components/scroll-to-top-button'

import { ReferencesMap } from './ui/references-map'

export default function References() {
  return (
    <>
      <Header otherPage />
      <main className="flex flex-col items-center p-6 lg:p-10">
        <section className="w-full max-w-4xl space-y-6 text-justify">
          <h1 className="text-xl font-bold tracking-tighter text-cyan-800 lg:text-3xl">
            Referencial Teórico
          </h1>
          <p className="text-base text-stone-700 lg:text-lg">
            Para fundamentar este estudo sobre as relações entre educação e
            trabalho durante o Estado Novo, o referencial teórico será composto
            por obras que oferecem uma análise crítica e detalhada das políticas
            e instituições do período, com ênfase na construção do trabalhismo,
            no desenvolvimento das instituições brasileiras e no projeto
            nacional liderado por Getúlio Vargas. As seguintes obras serão
            utilizadas, cada uma escolhida por sua relevância e abordagem
            específica:
          </p>
          <h2 className="text-xl font-semibold tracking-tighter text-stone-700 lg:text-2xl">
            Obras Utilizadas
          </h2>
          <ReferencesMap />
          <h2 className="text-lg font-semibold tracking-tight text-stone-700 lg:text-2xl">
            Justificativa da Escolha das Obras e Aplicação na Pesquisa
          </h2>
          <p className="text-base text-stone-700 lg:text-lg">
            As obras selecionadas oferecem um conjunto coeso de análises que
            abordam diferentes aspectos do Estado Novo e sua relação com as
            políticas de educação e trabalho. Cada obra contribui para uma
            compreensão mais profunda das estratégias utilizadas pelo governo
            Vargas para moldar a sociedade brasileira, com ênfase na formação de
            uma mão de obra alinhada aos objetivos nacionais. A combinação
            dessas perspectivas teóricas permitirá analisar como as políticas de
            educação profissional não apenas responderam às demandas do mercado
            de trabalho emergente, mas também como foram utilizadas como
            ferramentas para promover o projeto de nação idealizado pelo
            governo.
          </p>
          <div className="rounded-lg bg-stone-50 p-8 text-xs shadow-lg lg:text-sm">
            <ul className="space-y-4 text-stone-800">
              <li className="flex items-center space-x-3">
                <FaSearch className="text-5xl text-blue-500 lg:text-2xl" />
                <span>
                  Explorar o surgimento e consolidação do trabalhismo (Angela de
                  Castro Gomes) como uma base ideológica que influenciou as
                  políticas educacionais.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaBuilding className="text-5xl text-green-500 lg:text-2xl" />
                <span>
                  Analisar a estruturação das instituições responsáveis pela
                  implementação dessas políticas, com foco no Sistema S (Maria
                  Celina D’Araújo).
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaGlobe className="text-5xl text-yellow-500 lg:text-2xl" />
                <span>
                  Contextualizar essas políticas dentro do projeto
                  nacional-estatista do Estado Novo (Jorge Ferreira e Lucília de
                  Almeida Neves Delgado).
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEye className="text-5xl text-red-500 lg:text-2xl" />
                <span>
                  Compreender como essas políticas se inserem no projeto de
                  nação de Vargas, e sua visão para o futuro do Brasil (André
                  Barbosa Fraga et al.).
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaBook className="text-5xl text-purple-500 lg:text-2xl" />
                <span>
                  Explorar as bases ontológicas e históricas da relação entre
                  trabalho e educação (Dermeval Saviani).
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCogs className="text-5xl text-teal-500 lg:text-2xl" />
                <span>
                  Examinar a pedagogia desenvolvida nas fábricas e sua relação
                  com a formação profissional (Acácia Kuenzer).
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaChalkboardTeacher className="text-5xl text-indigo-500 lg:text-2xl" />
                <span>
                  Analisar as correntes pedagógicas que influenciaram as
                  políticas educacionais e sua aplicação prática (Marise Ramos).
                </span>
              </li>
            </ul>
          </div>
        </section>
        <Link href="/">
          <p className="mt-8 text-lg font-semibold text-cyan-800 hover:underline">
            Voltar para a Página Inicial
          </p>
        </Link>
      </main>
      <ScrollToTopButton />
      <Footer />
    </>
  )
}
