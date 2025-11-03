// components/Menu.tsx
"use client"
import { useState } from 'react'

interface MenuItem {
  nome: string;
  descricao: string;
  preco: string;
  popular?: boolean; // opcional
}

// Defina a interface para o menuData
interface MenuData {
  [key: string]: MenuItem[];
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('pizzas')

  const menuData:MenuData = {
    pizzas: [
      { nome: 'Margherita', descricao: 'Molho de tomate, mussarela, manjericão fresco', preco: 'R$ 35,00', popular: true },
      { nome: 'Pepperoni', descricao: 'Mussarela, pepperoni, orégano', preco: 'R$ 42,00', popular: true },
      { nome: 'Quatro Queijos', descricao: 'Mussarela, provolone, parmesão, gorgonzola', preco: 'R$ 45,00' },
      { nome: 'Calabresa', descricao: 'Mussarela, calabresa, cebola, azeitonas', preco: 'R$ 40,00' },
      { nome: 'Frango com Catupiry', descricao: 'Frango desfiado, catupiry, milho', preco: 'R$ 44,00' },
      { nome: 'Portuguesa', descricao: 'Presunto, mussarela, ovos, cebola, azeitonas', preco: 'R$ 43,00' }
    ],
    lanches: [
      { nome: 'X-Burger', descricao: 'Hambúrguer, queijo, alface, tomate', preco: 'R$ 18,00' },
      { nome: 'X-Bacon', descricao: 'Hambúrguer, bacon, queijo, alface', preco: 'R$ 22,00' },
      { nome: 'X-Tudo', descricao: 'Hambúrguer, bacon, ovos, queijo, presunto', preco: 'R$ 28,00' }
    ],
    bebidas: [
      { nome: 'Refrigerante 2L', descricao: 'Coca-Cola, Guaraná, Fanta', preco: 'R$ 12,00' },
      { nome: 'Suco Natural', descricao: 'Laranja, Limão, Maracujá', preco: 'R$ 8,00' },
      { nome: 'Água Mineral', descricao: 'Com ou sem gás', preco: 'R$ 5,00' }
    ],
    promocoes: [
      { nome: 'Combo Família', descricao: '2 Pizzas Grandes + 2 Refrigerantes 2L', preco: 'R$ 75,00', popular: true },
      { nome: 'Pizza + Refri', descricao: 'Qualquer pizza média + refrigerante 1L', preco: 'R$ 50,00' }
    ]
  }

  return (
    <section id="cardapio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Cardápio</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Todos os nossos produtos são feitos com ingredientes selecionados e muito amor!
        </p>

        {/* Categorias */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'pizzas', label: '🍕 Pizzas' },
            { id: 'lanches', label: '🍔 Lanches' },
            { id: 'bebidas', label: '🥤 Bebidas' },
            { id: 'promocoes', label: '🔥 Promoções' }
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all cursor-pointer ${
                activeCategory === category.id
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Itens do Cardápio */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData[activeCategory].map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {item.popular && (
                <div className="bg-red-600 text-white px-4 py-1 text-sm font-bold text-center">
                  🏆 MAIS PEDIDO
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{item.nome}</h3>
                  <span className="text-orange-600 font-bold text-lg">{item.preco}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.descricao}</p>
                <button className="w-full bg-orange-600 text-white py-3 rounded-full hover:bg-orange-700 transition font-semibold cursor-pointer">
                  🛒 Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Entrega */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">🚚 Entrega Grátis</h3>
          <p className="text-gray-600 mb-6">
            Entregamos em toda a região. <strong>Pedido mínimo: R$ 80,00</strong>
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div>📍 Bairros atendidos: Centro, Jardins, Vila Nova</div>
            <div>⏰ Tempo de entrega: 30-45 minutos</div>
            <div>💳 Aceitamos: Cartão, Dinheiro, PIX</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu