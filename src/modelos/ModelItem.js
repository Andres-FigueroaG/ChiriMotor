import React from 'react';

function ModelItem({ imgSrc, altText, title, brand, price, link }) {
  return (
    <div className="model-item">
      <img src={imgSrc} alt={altText} className="model-image" />
      <div className="model-info">
        <h2>{title}</h2>
        <p>Marca: {brand}</p>
        <p>Precio: {price}</p>
        <a href={link} className="btn">Ver Especificaciones</a>
      </div>
    </div>
  );
}

export default ModelItem;
