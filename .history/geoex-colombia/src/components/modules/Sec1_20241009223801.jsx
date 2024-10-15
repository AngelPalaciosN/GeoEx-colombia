import React from 'react';
import '../../scss/header.scss';

function Sec1() {
  return (
    <section id='sec1' className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="display-4 text-dark">Conoce tus territorios, jugando!!</h1>
                        <button className='btn'>Jugar</button>
                </div>
            </div>
        </div>
    </section>
      );
}

export default Sec1;
