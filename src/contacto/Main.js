import React from 'react';

function Main() {
  return (
    <main>
      <section className="contact-intro">
        <div className="contact-info">
          <h1>Contáctanos</h1>
          <p>Si tienes alguna pregunta o inquietud, completa el formulario a continuación y nos pondremos en contacto contigo a la brevedad.</p>
        </div>
        <section className="contact-form">
          <h2>Formulario de Contacto</h2>
          <form action="procesar_contacto.php" method="post">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />

            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="asunto">Asunto:</label>
            <input type="text" id="asunto" name="asunto" required />

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </section>
      </section>

      <section className="contact-details">
        <h2>Otras formas de Contacto</h2>
        <div className="contact-cards-container">
          <div className="contact-card">
            <h3>Dirección</h3>
            <p>Calle Ficticia 123, Ciudad, País</p>
          </div>
          <div className="contact-card">
            <h3>Teléfono</h3>
            <p>+123 456 7890</p>
          </div>
          <div className="contact-card">
            <h3>Correo Electrónico</h3>
            <p>contacto@chirimotors.com</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
