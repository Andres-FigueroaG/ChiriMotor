  import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Principal from './index/Principal';
import Nosotros from './nosotros/Sobre_nosotros';
import Modelos from './modelos/Modelos';
import Contactanos from './contacto/Contactanos';
import ThreeScenesContainer from './ThreeScenesContainer';
import { ModelProvider } from './ModelContext';
//import nosotros from './nosotros/sobre_nosotros'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal/>}></Route>
          <Route path="/nosotros" element={<Nosotros/>}></Route>
          <Route path="/modelos" element={<Modelos/>}></Route>
          <Route path="/contacto" element={<Contactanos/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
