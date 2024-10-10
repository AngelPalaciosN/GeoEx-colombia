import React from 'react';
import '../../scss/mapa.scss';

function Mapa({ onClose }) {
  return (  
    <div id="mapa" className='container'>
      <h1>Hola</h1>
      <button onClick={onClose}>Cerrar Mapa</button>
    </div>
  );
}

export default Mapa;