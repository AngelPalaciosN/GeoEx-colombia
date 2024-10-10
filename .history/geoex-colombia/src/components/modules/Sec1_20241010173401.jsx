import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Mapa from './mapa';
import '../../scss/mapa.scss';

function Sec1() {
  const [isMapV, setMapV] = useState(false);

  const handleOpenMap = () => {
    setMapV(true);
  };

  const [text] = useTypewriter({
    words: ['territorio', 'país', 'Colombia'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const getColor = (word) => {
    if (word.includes('territorio')) {
      return 'yellow';
    } else if (word.includes('país')) {
      return 'blue';
    } else if (word.includes('Colombia')) {
      return 'red';
    } else {
      return 'black';
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <section id='sec1' className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4">
                Conoce tu{' '}
                <span style={{ color: getColor(text) }}>
                  {text}
                  <Cursor />
                </span>
              </h1>
              <button className='btn btn-primary' onClick={handleOpenMap}>Jugar</button>
            </div>
          </div>
        </div>
      </section>

      {isMapV && (
        <div className="MapaV" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          backgroundColor: 'rgba(255, 255, 255, 0.9)'  // Fondo semi-transparente
        }}>
          <Mapa />
        </div>
      )}
    </div>
  );
}

export default Sec1;