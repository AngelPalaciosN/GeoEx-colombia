import React, { useState, useEffect } from 'react';
import '../../scss/header.scss';

function Sec1() {
  const [text, setText] = useState('territorios'); // Estado para el texto
  const [color, setColor] = useState('text-dark'); // Estado para el color

  // Lista de textos y colores para ciclar
  const texts = ['territorios', 'país', 'Colombia'];
  const colors = ['text-warning', 'text-primary', 'text-info']; // Amarillo, azul

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      setText(texts[index % texts.length]); // Cambia el texto
      setColor(colors[index % colors.length]); // Cambia el color
      index++;
    }, 2000);

    return () => clearInterval(intervalId);
  }, [texts, colors]); // Incluye texts y colors como dependencias

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
