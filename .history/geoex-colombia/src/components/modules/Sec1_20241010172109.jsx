import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Mapa from './mapa';
import '../../scss/mapa.scss'

function Sec1() {
  const [isMapV, setMapV] = React.useState(false);

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
            {isMapV && (
            <div className="MapaV">
              <Mapa />
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec1;