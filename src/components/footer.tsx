import Image from 'next/image'
import Link from 'next/link'
import { BsLink } from 'react-icons/bs'

import flagUnb from '@/images/flag-unb.png'
export function Footer() {
  return (
    <footer className="flex items-center justify-center bg-cyan-950 text-stone-300">
      <div className="container flex flex-col items-center justify-center gap-3 px-10 py-7 lg:flex-row lg:justify-between lg:gap-0 lg:px-20">
        <p className="self-center justify-self-end">
          &copy; Developed by{' '}
          <Link
            href="https://www.juliorarick.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline hover:underline-offset-4"
          >
            Júlio Rarick
          </Link>
        </p>
        <div className="self-center justify-self-center">
          <Image
            src={flagUnb}
            width={100}
            height={100}
            quality={50}
            alt="Bandeira da Universidade de Brasília - UNB"
            className="h-auto w-20 object-contain shadow-md"
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:gap-1">
          <p className="flex items-center justify-center gap-1">
            project.education |{' '}
            <Link
              href="https://github.com/JulioRarick/project.education"
              target="_blank"
              className="flex items-center justify-center gap-1 text-blue-400 hover:underline hover:underline-offset-4"
            >
              Github <BsLink className="text-xl" />
            </Link>
          </p>
          <p> Universidade de Brasília - UNB</p>
        </div>
      </div>
    </footer>
  )
}
