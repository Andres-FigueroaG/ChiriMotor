import React from 'react';
import NavBar from '../components/NavBar';
function Header() {
  return (
    <header className="video-header">
      <NavBar></NavBar>
      <div className="overlay"></div>
      <video autoPlay muted loop className="video-background">
        <source src="https://imcruz-bolivia.s3.amazonaws.com/otros/car-in-the-road-in-the-middle-of-mountains-large.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
      <div className="content">
        <h1>Bienvenido a CHIRIMOTORS</h1>
        <p>Encuentra el auto de tus sueños con nosotros</p>
      </div>
    </header>
  );
}

export default Header;
