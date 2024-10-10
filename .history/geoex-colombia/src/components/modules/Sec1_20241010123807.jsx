import React, { useState, useEffect } from 'react';
import '../../scss/header.scss';

function Sec1() {
  const [text, setText] = useState('territorios');
  const [color, setColor] = useState('text-dark');

  const texts = ['territorios', 'país', 'Colombia'];
  const colors = ['text-warning', 'text-primary', 'text-info'];

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setText(texts[index % texts.length]); 
      setColor(colors[index % colors.length]); 
      index++;
    }, 2000);

    return () => clearInterval(intervalId);
  }, [texts, colors]);

  return (
    <section id='sec1' className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className={`display-4 ${color}`}>
              Conoce tus {text}
            </h1>
            <button className='btn btn-primary'>Jugar</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sec1;
