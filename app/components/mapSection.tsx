// components/MapSection.tsx
const MapSection = () => {
//   const address = "Av. Paulista, 1000, São Paulo - SP, 01310-100";

  return (
    <section id="localizacao" className=" bg-white">
      <div className="container">
         
          <div className="h-96 w-full rounded-lg overflow-hidden ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.097241765362!2d-46.6539055246873!3d-23.56355827879859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1711234567890!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
     
      </div>
    </section>
  );
};

export default MapSection;