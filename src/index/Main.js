import React, { useState, useEffect } from 'react';

//carrucel
//import React, { useState, useEffect } from 'react';

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
      "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2018/06/10-mejores-coches-lujo_6.jpg?tf=3840x",
      "https://img.remediosdigitales.com/dbbc5b/fiat-pulse-mexico-video-prueba-precio_/1366_2000.jpg"
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, [images.length]);
  
    return (
      <div className="carousel">
        <div className="carousel-images" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Modelo ${index + 1}`} className="carousel-image" />
          ))}
        </div>
      </div>
    );
  }


function Main() {
  return (
    <main>
      <section className="designs">
        <h2>Los mejores diseños</h2>
        <p>En CHIRIMOTORS, ofrecemos vehículos con diseños innovadores y elegantes, pensados para aquellos que buscan destacar en cada camino.</p>
      </section>

      <section className="car-showcase">
        <div className="car-showcase-item">
          <img src="https://img.remediosdigitales.com/d49161/2015-c-class-11-1-1/1366_2000.jpg" alt="Auto 1" className="car-image" />
          <div className="car-description">
            <h3>TECNOLOGÍA SKYACTIV: UN ENFOQUE MÁS INTELIGENTE</h3>
            <p>Cuando los componentes de un sistema se diseñan para que funcionen juntos, ese sistema operará con máxima eficiencia. Esta es la idea simple de la tecnología Skyactiv.</p>
          </div>
        </div>
        <div className="car-showcase-item reverse">
          <img src="https://acnews.blob.core.windows.net/imggallery/1024x768/GAZ_526a7320d88c4044a31770bfcbc3daa5.jpg" alt="Auto 2" className="car-image" />
          <div className="car-description">
            <h3>UN ESPACIO ACOGEDOR</h3>
            <p>El interior representa el vínculo inconfundible entre el conductor y el auto. Cada detalle está diseñado por expertos, cada componente está colocado intuitivamente, lo que crea la sensación de confort envolvente que hace que cada viaje sea una inspiración.</p>
          </div>
        </div>
      </section>

      <section className="carousel-section">
        <h2>Nuestros Modelos</h2>
        <Carousel />
      </section>
    </main>
  );
}

export default Main;
