import React from 'react';
import Typed from 'react-typed';

function Sec1() {
  return (
    <section id='sec1' className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4">
              Conoce tus{' '}
              <span className="text-primary">
                <Typed
                  strings={['territorios', 'país', 'Colombia']}
                  typeSpeed={100}
                  backSpeed={50}
                  loop
                />
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
