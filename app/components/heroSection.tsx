// components/Hero.tsx (versão alternativa)
const Hero = () => {
  return (
    <section id="inicio" className="relative w-full h-[780px]">
      {/* Container do vídeo */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video-pizzaria.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
        {/* Overlay para melhor legibilidade */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            As melhores Pizzas e Lanches da <span className="text-yellow-300">Cidade</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Feita com ingredientes frescos e massa artesanal. 
            <span className="block font-semibold mt-2">Entrega em até 30 minutos!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#cardapio"
              className="bg-white text-orange-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-lg hover:scale-105"
            >
              🍕 Ver Cardápio Completo
            </a>
            <a
              href="https://wa.me/5511999999999"
              className="bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300 font-bold text-lg shadow-lg hover:scale-105"
            >
              📱 Pedir pelo WhatsApp
            </a>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              ['🚀', 'Entrega Rápida', '30 min ou menos'],
              ['🍕', 'Pizza Artesanal', 'Massa fresca'],
              ['💰', 'Preço Justo', 'Qualidade garantida'],
              ['⭐', 'Avaliação 4.9', '+1000 clientes']
            ].map(([icon, title, desc]) => (
              <div key={title} className="text-center  backdrop-blur-sm rounded-lg p-4 border border-neutral-400 border-opacity-50">
                <div className="text-3xl mb-2">{icon}</div>
                <h3 className="font-bold text-yellow-300 text-lg mb-1">{title}</h3>
                <p className="text-sm opacity-90">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero