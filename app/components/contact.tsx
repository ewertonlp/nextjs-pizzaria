import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaClock, FaPhone } from 'react-icons/fa';
import MapSection from './mapSection';


const Contact = () => {
  const contactInfo = [
    { id: 1, Icon: FaPhone, info: '(11) 9999-9999', label: 'Nosso telefone' },
    { id: 2, Icon: FaWhatsapp, info: '(11) 98888-8888', label: 'WhatsApp' },
    { id: 3, Icon: FaMapMarkerAlt, info: 'Rua das Pizzas, 123 - Centro', label: 'Nosso endereço' },
    { id: 4, Icon: FaClock, info: 'Seg-Dom: 18h-23h', label: 'Horário de funcionamento' }
  ];

  const socialLinks = [
    { id: 1, Icon: FaFacebook, name: 'Facebook', link: '#' },
    { id: 2, Icon: FaInstagram, name: 'Instagram', link: '#' },
    { id: 3, Icon: FaWhatsapp, name: 'WhatsApp', link: 'https://wa.me/5511999999999' }
  ];

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Informações */}
          <div className='w-2/3'>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Entre em Contato</h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map(({ id, Icon, info, label }) => (
                <div key={id} className="flex items-center space-x-4">
                  <Icon className="text-2xl text-orange-600" />
                  <div>
                    <p className="font-semibold text-gray-800">{info}</p>
                    <p className="text-sm text-gray-600">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Redes Sociais */}
            <div className="flex space-x-4">
              {socialLinks.map(({ id, Icon, name, link }) => (
                <a
                  key={id}
                  href={link}
                  className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg hover:bg-orange-100 transition flex items-center space-x-2 hover:shadow-md"
                >
                  <Icon className="text-lg" />
                  <span className="font-medium">{name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mapa */}
          <div className="w-full bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="w-full text-center text-gray-600 overflow-hidden inset-0">
              <MapSection />
              {/* <FaMapMarkerAlt className="text-4xl mb-4 mx-auto" />
              <p>Mapa da Localização</p>
              <p className="text-sm">Rua das Pizzas, 123 - Centro</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact