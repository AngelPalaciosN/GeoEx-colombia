import React from 'react';
// import { useTypewriter, Cursor } from 'react-simple-typewriter';
import '../../scss/mapa.scss';

function Mapa() {
    const [isMapV, setMapV] = useState(true);

    const handleCloseMap = () => {
        setMapV(true);
      };
    
  return (  
    <div id="mapa" className='container'>
    <h1>Hola</h1>
    <button onClick={handleOpenMap}>Abrir Mapa</button>
    </div>
  );
}

export default Mapa;