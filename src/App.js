import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from "./Componentes/Buscador.jsx";
import MiApi from "./Componentes/MiApi.jsx";
import { useState } from 'react';
import Logo from "./Assets/logo-sinfondo.png"
import Footer from './Componentes/Footer.jsx';


function App() {
  const [valorBusqueda, setValorBusqueda] = useState('');
  const [ordenar, setOrdenar] = useState(false);
  
  return (
    <div className="App">
      <div className='logo'>
				<img src={Logo} alt='Logo' />
			</div>
      <Buscador setValorBusqueda={setValorBusqueda} setOrdenar={setOrdenar}></Buscador>
      <MiApi 
      valorBusqueda={valorBusqueda} ordenar={ordenar}></MiApi>
      <Footer></Footer>
    </div>
  );
};

export default App;