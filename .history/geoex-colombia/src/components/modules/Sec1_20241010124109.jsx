import React from 'react';
import Typewriter from 'react-typewriter-effect';
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
                <Typewriter
                  text={['territorios', 'país', 'Colombia']}
                  cursorColor="#3F3D56"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  loop={true}
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
