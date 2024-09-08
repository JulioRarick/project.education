'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import { IoMdSchool } from 'react-icons/io'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.4 },
    },
  }

  return (
    <header className="bg-gradient-to-r from-cyan-900 via-cyan-700 to-cyan-900 py-6 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-0">
        <div className="flex items-center space-x-2">
          <IoMdSchool className="text-3xl" />
          <span className="text-xl font-bold tracking-tighter lg:text-2xl">
            project.education
          </span>
        </div>
        <nav className="hidden space-x-8 text-base font-light lg:flex">
          <Link href="#presentation">
            <p className="border-b-2 border-transparent transition-colors ease-in-out hover:border-white">
              Apresentação
            </p>
          </Link>
          <Link href="#justification">
            <p className="border-b-2 border-transparent transition-colors ease-in-out hover:border-white">
              Justificativa
            </p>
          </Link>
          <Link href="#objectives">
            <p className="border-b-2 border-transparent transition-colors ease-in-out hover:border-white">
              Objetivos
            </p>
          </Link>
          <Link href="#references">
            <p className="border-b-2 border-transparent transition-colors ease-in-out hover:border-white">
              Referenciais Teóricos
            </p>
          </Link>
          <Link href="#methodologies">
            <p className="border-b-2 border-transparent transition-colors ease-in-out hover:border-white">
              Metodologia
            </p>
          </Link>
          <Link href="#timeline">
            <p className="border-b-2 border-transparent transition-colors ease-in-out hover:border-white">
              Cronograma
            </p>
          </Link>
        </nav>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-3xl focus:outline-none">
            {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>
      <motion.div
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={menuVariants}
        className="mt-4 overflow-hidden px-8 text-end lg:hidden"
      >
        <nav className="space-y-8 text-base font-medium">
          <Link href="#presentation">
            <p className="ease-in-out hover:underline hover:underline-offset-2">
              Apresentação
            </p>
          </Link>
          <Link href="#justification">
            <p className="ease-in-out hover:underline hover:underline-offset-2">
              Justificativa
            </p>
          </Link>
          <Link href="#objectives">
            <p className="ease-in-out hover:underline hover:underline-offset-2">
              Objetivos
            </p>
          </Link>
          <Link href="#references">
            <p className="ease-in-out hover:underline hover:underline-offset-2">
              Referencial Teórico
            </p>
          </Link>
          <Link href="#objectives">
            <p className="ease-in-out hover:underline hover:underline-offset-2">
              Referencial Teórico
            </p>
          </Link>
          <Link href="#methodologies">
            <p className="ease-in-out hover:underline hover:underline-offset-2">
              Metodologia
            </p>
          </Link>
          <Link href="#timeline">
            <p className="ease-in-out hover:underline hover:underline-offset-2">
              Cronograma
            </p>
          </Link>
        </nav>
      </motion.div>
    </header>
  )
}
