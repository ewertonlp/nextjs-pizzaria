import Image from "next/image"

// components/About.tsx
const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-start gap-12">
          <div className="lg:w-1/2">
            <div className=" h-80 flex items-center justify-center">
                <Image src='/pizzaria.jpg' width={1000} height={50} alt="Pizzaria" className="rounded-lg" />
             
            </div>
          </div>
          <div className="lg:w-1/2 items-start">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Há 25 anos levando sabor até você!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Fundada em 2009, a Pizzaria Sabor Italiano nasceu do sonho de trazer 
              a autêntica pizza italiana com um toque brasileiro. Nossa massa é 
              preparada artesanalmente todos os dias.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                ['🧑‍🍳', 'Chef Experiente', 'Mais de 20 anos de experiência'],
                ['🌱', 'Ingredientes Frescos', 'Selecionados diariamente'],
                ['🏆', 'Prêmios', 'Melhor pizza da região 2023'],
                ['🚀', 'Tecnologia', 'Pedido online rápido e seguro']
              ].map(([icon, title, desc]) => (
                <div key={title} className="flex items-start space-x-3">
                  <div className="text-2xl">{icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{title}</h4>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contato"
              className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition font-semibold"
            >
              📞 Falar Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About