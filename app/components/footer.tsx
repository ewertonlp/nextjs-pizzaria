// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Sabor Italiano</h3>
            <p className="text-gray-300">
              A melhor pizza da cidade, feita com ingredientes frescos e muito amor.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#cardapio" className="hover:text-orange-400 transition">Cardápio</a></li>
              <li><a href="#sobre" className="hover:text-orange-400 transition">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-orange-400 transition">Contato</a></li>
              <li><a href="#avaliacoes" className="hover:text-orange-400 transition">Avaliações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Horário de Funcionamento</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Segunda a Domingo</li>
              <li>18:00 - 23:00</li>
              <li>Delivery até 22:30</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Formas de Pagamento</h4>
            <div className="flex flex-wrap gap-2 text-sm text-gray-300">
              <span>💳 Cartão</span>
              <span>💰 Dinheiro</span>
              <span>📱 PIX</span>
              <span>🍕 Vale Refeição</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pizzaria Sabor Italiano. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">
            🎨 Projeto fictício desenvolvido para portfólio - Next.js + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer