import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Mapa() {
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
    <h1>Hola</h1>
  );
}

export default Mapa;