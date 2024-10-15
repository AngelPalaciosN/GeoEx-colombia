import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../scss/header.scss';

const back = {
  color: ['amarillo', 'azul', 'rojo'],
};

function Header() {
  const navigate = useNavigate();

  const darclic = () => {
    navigate('/Home');
  }

  const [currentColor, setCurrentColor] = useState(back.color[0]);

  const getColor = (color) => {
    if (color === 'amarillo') {
      return '#FCD116';
    } else if (color === 'azul') {
      return '#003893';
    } else if (color === 'rojo') {
      return '#CE1126';
    }
  };

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setCurrentColor((prevColor) => {
        const currentIndex = back.color.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % back.color.length;
        return back.color[nextIndex];
      });
    }, 1500); // Cambia el color cada 2 segundos

    return () => clearInterval(colorInterval);
  }, []);

  return (
    <header id='con' className="bg-white shadow" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <div className="container py-4">
        <div className="row justify-content-center align-items-center">
          <div className="col-auto d-flex align-items-center" onClick={darclic} style={{ cursor:'pointer' }}> 
            <div className="custom-loader" style={{ background: getColor(currentColor) }}></div>
            <span className="h2 mb-0 ms-3 fw-bold text-primary" style={{ letterSpacing: '0.5px' }}>Geoex</span>
          </div>
        </div>
      </div>
      <div className="d-flex" style={{ height: '8px' }}>
        <div className="w-50" style={{ backgroundColor: '#FCD116' }}></div>
        <div className="w-25" style={{ backgroundColor: '#003893' }}></div>
        <div className="w-25" style={{ backgroundColor: '#CE1126' }}></div>
      </div>
    </header>
  );
}

export default Header;