import React, { useState } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Mapa from './mapa';
import '../../scss/mapa.scss';

function Sec1() {
  const [isMapV, setMapV] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOpenMap = () => {
    setIsAnimating(true);
    setMapV(true);
  };

  const handleCloseMap = () => {
    setIsAnimating(false);
    // Retrasa el cierre del componente para permitir que se complete la animación
    setTimeout(() => setMapV(false), 500); // 500ms coincide con la duración de la animación
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

      {/* Overlay oscuro */}
      {isMapV && (
        <div className={`overlay ${isAnimating ? 'show' : 'hide'}`}></div>
      )}

      {/* Componente MapaV */}
      {isMapV && (
        <div className={`MapaV ${isAnimating ? 'show' : 'hide'}`}>
          <Mapa onClose={handleCloseMap} />
        </div>
      )}
    </div>
  );
}

export default Sec1;
