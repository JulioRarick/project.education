import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

import { Bibliography } from './ui/bibliography'
import { Justification } from './ui/justification'
import { MethodologiesHomeContent } from './ui/methodologies-home-content'
import { Objectives } from './ui/objectives'
import { Presentation } from './ui/presentation'
import { ProjectTitle } from './ui/project-title'
import { ReferencesHomeContent } from './ui/references-home-content'
import { Timeline } from './ui/timeline'

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto space-y-8 px-6 py-8 lg:container lg:space-y-10 lg:py-10">
        <ProjectTitle />
        <Presentation />
        <Justification />
        <Objectives />
        <ReferencesHomeContent />
        <MethodologiesHomeContent />
        <Timeline />
        <Bibliography />
      </main>
      <Footer />
    </>
  )
}
