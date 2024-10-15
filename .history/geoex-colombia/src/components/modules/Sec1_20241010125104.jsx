import React from 'react';
import ReactTyped from 'react-typed'; // Importa como ReactTyped
import '../../scss/header.scss';

function Sec1() {
  return (
    <section id='sec1' className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="display-4">
              Conoce tus{' '}
              <span className="text-primary">
                <ReactTyped // Usa ReactTyped aquí
                  strings={['territorios', 'país', 'Colombia']}
                  typeSpeed={100}
                  backSpeed={50} // Agrega backSpeed si deseas que se borre
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
