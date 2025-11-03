// components/Header.tsx
"use client"
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-40 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-600 rounded-full"></div>
              <h1 className="text-2xl font-bold text-orange-600">Sabor Italiano</h1>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            {/* Botão Pedir Online - Sempre visível */}
            <a
              href="https://www.ifood.com.br/"
              className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-all duration-300 font-semibold text-sm md:text-base"
              target='blank'
            >
              🍕 Pedir Online
            </a>

            {/* Menu Desktop */}
            <nav className="hidden md:block">
              <ul className="flex space-x-6 text-gray-700">
                <li><a href="#inicio" className="hover:text-orange-600 transition">Início</a></li>
                <li><a href="#cardapio" className="hover:text-orange-600 transition">Cardápio</a></li>
                <li><a href="#sobre" className="hover:text-orange-600 transition">Sobre</a></li>
                <li><a href="#avaliacoes" className="hover:text-orange-600 transition">Avaliações</a></li>
                <li><a href="#contato" className="hover:text-orange-600 transition">Contato</a></li>
              </ul>
            </nav>

            {/* Botão Menu Mobile */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 border-t border-gray-100 pt-4`}>
          <ul className="flex flex-col space-y-3 text-gray-700">
            <li><a href="#inicio" className="block py-2 hover:text-orange-600 transition" onClick={() => setIsMenuOpen(false)}>Início</a></li>
            <li><a href="#cardapio" className="block py-2 hover:text-orange-600 transition" onClick={() => setIsMenuOpen(false)}>Cardápio</a></li>
            <li><a href="#sobre" className="block py-2 hover:text-orange-600 transition" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
            <li><a href="#avaliacoes" className="block py-2 hover:text-orange-600 transition" onClick={() => setIsMenuOpen(false)}>Avaliações</a></li>
            <li><a href="#contato" className="block py-2 hover:text-orange-600 transition" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header