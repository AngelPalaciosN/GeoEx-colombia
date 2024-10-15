import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Sec1() {
  const [text] = useTypewriter({
    words: ['territorio', 'país', 'Colombia'],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <section id='sec1' className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4">
              Conoce tu{' '}
              <span className="text-primary">
                {text}
                <Cursor />
              </span>
            </h1>
            <button className='btn btn-primary'>Jugar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec1;
