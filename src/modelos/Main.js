import React from 'react';
import ModelItem from './ModelItem';  // Necesitaremos este componente

function Main() {
  const models = [
    {
      imgSrc: 'https://www.imcruzcenter.com.bo/grtadmin/imagenes/Renault_Kwid_version-E3.jpg',
      altText: 'Modelo 1',
      title: 'Modelo X',
      brand: 'EjemploMarca',
      price: '$30,000',
      link: 'especificacion_modelo.html',
    },
    {
      imgSrc: 'https://www.imcruzcenter.com.bo/grtadmin/imagenes/changan-new-alsvin-luxury-blanco.jpg',
      altText: 'Modelo 2',
      title: 'Modelo Y',
      brand: 'EjemploMarca',
      price: '$40,000',
      link: 'especificacion_modelo.html',
    },
    {
        imgSrc: 'https://derco-store-bo-dev.s3.amazonaws.com/cars_por_version/jac-js4-luxury-blanco.jpg',
        altText: 'Modelo 3',
        title: 'Modelo Y',
        brand: 'EjemploMarca',
        price: '$40,000',
        link: 'especificacion_modelo.html',
      },
      {
        imgSrc: 'https://www.imcruzcenter.com.bo/grtadmin/imagenes/suzuki-dzire-ga-z-gris.jpg',
        altText: 'Modelo 4',
        title: 'Modelo Y',
        brand: 'EjemploMarca',
        price: '$40,000',
        link: 'especificacion_modelo.html',
      },
      {
        imgSrc: 'https://derco-store-bo-dev.s3.amazonaws.com/cars_por_version/changan_cs15_gris.jpg',
        altText: 'Modelo 5',
        title: 'Modelo Y',
        brand: 'EjemploMarca',
        price: '$40,000',
        link: 'especificacion_modelo.html',
      },
      {
        imgSrc: 'https://derco-store-bo-dev.s3.amazonaws.com/cars_por_version/suzuki-new-baleno-gl-marron.jpg',
        altText: 'Modelo 6',
        title: 'Modelo Y',
        brand: 'EjemploMarca',
        price: '$40,000',
        link: 'especificacion_modelo.html',
      },
    // Agrega más modelos aquí
  ];

  const premiumModels = [
    {
      imgSrc: 'https://www.imcruzcenter.com.bo/grtadmin/imagenes/Renault_Kwid_version-E3.jpg',
      altText: 'Modelo 1',
      title: 'Modelo X',
      brand: 'EjemploMarca',
      price: '$30,000',
      link: 'especificaciones_modelo_x.html',
    },
    {
      imgSrc: 'https://www.imcruzcenter.com.bo/grtadmin/imagenes/changan-new-alsvin-luxury-blanco.jpg',
      altText: 'Modelo 2',
      title: 'Modelo Y',
      brand: 'EjemploMarca',
      price: '$40,000',
      link: 'especificaciones_modelo_y.html',
    },
    {
        imgSrc: 'https://derco-store-bo-dev.s3.amazonaws.com/cars_por_version/jac-js4-luxury-blanco.jpg',
        altText: 'Modelo 3',
        title: 'Modelo Y',
        brand: 'EjemploMarca',
        price: '$40,000',
        link: 'especificaciones_modelo_y.html',
      },
    // Agrega más modelos aquí
  ];

  return (
    <main>
      <section className="models">
        <h1>Modelos Disponibles</h1>
        <div className="models-grid">
          {models.map((model, index) => (
            <ModelItem
              key={index}
              imgSrc={model.imgSrc}
              altText={model.altText}
              title={model.title}
              brand={model.brand}
              price={model.price}
              link={model.link}
            />
          ))}
        </div>
      </section>
      <section className="models">
        <h1>Modelos Premium</h1>
        <div className="models-grid">
          {premiumModels.map((model, index) => (
            <ModelItem
              key={index}
              imgSrc={model.imgSrc}
              altText={model.altText}
              title={model.title}
              brand={model.brand}
              price={model.price}
              link={model.link}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
