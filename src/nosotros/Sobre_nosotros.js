import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import NavBar from '../components/NavBar';

//import 'import '../nosotros/Footer';'; // Asegúrate de crear este archivo para los estilos específicos
import '../App.css'

function SobreNosotros() {
  return (
    <div className="SobreNosotros">
      <NavBar></NavBar>
      <Main />
      <Footer />
    </div>
  );
}

export default SobreNosotros;
