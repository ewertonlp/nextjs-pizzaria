// pages/index.tsx
import Head from 'next/head'
import Header from './components/header'
import Hero from './components/heroSection'
import Menu from './components/menu'
import About from './components/about'
import Testimonials from './components/testimonials'
import Contact from './components/contact'
import Footer from './components/footer'

export default function Pizzaria() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Sabor Italiano - A Melhor Pizza da Cidade</title>
        <meta name="description" content="Pizzaria Sabor Italiano - Pizza artesanal, delivery rápido e ingredientes frescos. Peça online!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Banner de portfólio */}
      <div className="bg-orange-50 border-b border-orange-200 py-2">
        <div className="container mx-auto px-6 text-center">
          <p className="text-orange-800 text-sm">
            🎨 <strong>Projeto de Portfólio</strong> - Site fictício desenvolvido com Next.js e Tailwind CSS
          </p>
        </div>
      </div>

      <Header />
      <Hero />
      <Menu />
      <About />
      <Testimonials />
      <Contact />
      <Footer /> 
    </div>
  )
}