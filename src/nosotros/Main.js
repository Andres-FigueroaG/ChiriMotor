import React from 'react';

function Main() {
  return (
    <main>
      <div className="hero-image">
        {/* Aquí puedes agregar una imagen hero si lo deseas */}
      </div>

      <section className="about-us">
        <div className="about-us-header">
          <h1>Sobre CHIRIMOTORS</h1>
          <p>En CHIRIMOTORS, nos enorgullecemos de ofrecer los mejores vehículos y un servicio excepcional a nuestros clientes. Desde nuestra fundación, nuestro objetivo ha sido proporcionar una experiencia de compra y servicio inigualable.</p>
        </div>
        
        <div className="about-us-content">
          <div className="about-us-item">
            <img src="https://img.freepik.com/fotos-premium/primer-suv-diseno-deportivo-moderno-concesionario-coches_67092-423.jpg" alt="Nuestra Historia" className="about-us-image" />
            <div className="about-us-text">
              <h2>Nuestra Historia</h2>
              <p>Fundada en [AÑO DE FUNDACIÓN], CHIRIMOTORS comenzó como un pequeño concesionario local y ha crecido hasta convertirse en un líder en la industria automotriz. A lo largo de los años, hemos ampliado nuestra oferta de vehículos y mejorado continuamente nuestros servicios para satisfacer las necesidades de nuestros clientes.</p>
            </div>
          </div>

          <div className="about-us-item reverse">
            <img src="https://blog.siticsoftware.com/f/2022/11/smiling-mechanic-using-tablet-pc_2560x1706.jpg" alt="Nuestro Equipo" className="about-us-image" />
            <div className="about-us-text">
              <h2> Nuestro Equipo</h2>
              <p>Contamos con un equipo de profesionales altamente capacitados y apasionados por la automoción. Desde nuestros asesores de ventas hasta nuestros técnicos, cada miembro del equipo está dedicado a proporcionar la mejor experiencia posible.</p>
            </div>
          </div>

          <div className="about-us-item">
            <img src="https://img.freepik.com/fotos-premium/pareja-joven-eligiendo-coche-concesionario-administrador-ayudando_93675-123564.jpg" alt="Nuestra Misión" className="about-us-image" />
            <div className="about-us-text">
              <h2>Nuestra Misión</h2>
              <p>Nuestra misión es ofrecer vehículos de alta calidad que se adapten a las necesidades de nuestros clientes y brindar un servicio al cliente excepcional. Trabajamos arduamente para garantizar que cada cliente se sienta valorado y satisfecho con su experiencia en CHIRIMOTORS.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
