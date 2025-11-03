// components/Testimonials.tsx
const Testimonials = () => {
  const testimonials = [
    {
      nome: "Maria Silva",
      comentario: "Melhor pizza que já comi! A massa é incrível e a entrega super rápida.",
      rating: 5
    },
    {
      nome: "João Santos", 
      comentario: "Sempre peço o combo família. Preço justo e qualidade excelente!",
      rating: 5
    },
    {
      nome: "Ana Costa",
      comentario: "Atendimento perfeito e pizza deliciosa. Recomendo a de pepperoni!",
      rating: 4
    }
  ]

  return (
    <section id="avaliacoes" className="py-20 bg-orange-600">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl  text-center font-semibold text-neutral-100 mb-4">
          O que nossos clientes dizem
        </h2>
        <p className="text-center text-gray-100 mb-12 max-w-2xl mx-auto">
          Mais de 1000 clientes satisfeitos e avaliação 4.9 no Google
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-neutral-50 p-6 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`text-lg ${i < testimonial.rating ? 'text-yellow-300' : 'text-gray-300'}`}
                  >
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-neutral-600 mb-4 italic">{testimonial.comentario}</p>
              <p className="font-semibold text-neutral-700">{testimonial.nome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials