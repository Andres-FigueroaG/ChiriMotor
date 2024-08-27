import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer>
      <nav className="footer-nav">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/nosotros">Sobre Nosotros</Link></li>
          <li><Link to="/modelos">Modelos</Link></li>
          <li><Link to="/contacto">Contactanos</Link></li>
        </ul>
      </nav>
      <div className="footer-info">
        <p>&copy; 2024 CHIRIMOTORS. Todos los derechos reservados.</p>
        <p>Dirección: Calle Ejemplo 123, Ciudad, País</p>
        <p>Email: contacto@chirimotors.com | Teléfono: +123 456 7890</p>
      </div>
    </footer>
  );
}

export default Footer;
