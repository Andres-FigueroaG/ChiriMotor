import React from 'react';
import NavBar from '../components/NavBar'
import Main from './Main';
import Footer from './Footer';
import ThreeScenesContainer from '../ThreeScenesContainer';
import { ModelProvider } from '../ModelContext';

function Modelos() {
  return (
    <div>
      <NavBar />
      <Main/>
      <ModelProvider>
        <div className="three-scenes-container">
          <ThreeScenesContainer />
        </div>
      </ModelProvider>
      
      <Footer />
    </div>
  );
}

export default Modelos;
