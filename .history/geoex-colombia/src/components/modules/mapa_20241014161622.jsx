'use client'

import React, { useState, useEffect } from 'react'
import '../../scss/mapa.scss'

const departments = [
  "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca",
  "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta",
  "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander",
  "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"
];

const departmentIds = {
  "Nariño": "CONAR",
  "Putumayo": "COPUT",
  // Agrega más departamentos aquí
};

export default function Mapa({ onClose }) {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [targetDepartment, setTargetDepartment] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleDepartmentClick = (departmentId) => {
    const department = Object.keys(departmentIds).find(key => departmentIds[key] === departmentId);
    setSelectedDepartment(department || "");
  };

  const handleSubmit = () => {
    setIsCorrect(selectedDepartment === targetDepartment);
    setShowResult(true);
  };

  const handleNextDepartment = () => {
    const randomDepartment = departments[Math.floor(Math.random() * departments.length)];
    setTargetDepartment(randomDepartment);
    setSelectedDepartment("");
    setShowResult(false);
  };

  useEffect(() => {
    handleNextDepartment();
  }, []);

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="title">Ubicación de Departamentos de Colombia</h2>
        <p className="subtitle">Haz clic en el departamento correcto en el mapa</p>
        <div className="map-container">
          <svg
            baseProfile="tiny"
            fill="#6f9c76"
            height="400"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth=".5"
            version="1.2"
            viewBox="0 0 1000 1000"
            width="100%"
            className="map"
          >
            <g id="departments">
              <path
                d="M308.8 605.6l4.6 3.1 1.5 1.6 0.1 1 0.3 1.1 0.6 1.8 0.1 0.6 0 0.5-0.2 0.6-0.6 1.8-0.1 0.4 0 0.5 0.1 0.5 0.8 2 3.7 5.3 0.1 0.5 0.2 1.7 0.2 0.4 0.5 0.5 1.4 0.6 1.6 0.4 1.8 0.6 1.2 0.1 0.9 0 2.4-0.8 1.6 0 1.5-0.6 0.8-0.6 0.3-0.3 1.4-0.2 1.4-0.2 1-0.3 0.1-0.2 0.5-0.3 0.2-0.2 0.3-0.1 0.9-0.1 0.6-0.1 0.8 0 0.5 0.1 0.9 0.4 4.6 2 0.5 0.9-0.1 1.5-0.8 1.2-0.2 0.8-0.2 0.3-0.1 0.5 0.2 0.4 0.4 0.4 3.1 2.3 0.7 0.4 0.5 0.2 1 0.5 0.7 1.3-0.6 1.5-0.1 0.2-0.3 0.1-0.6 0.2-0.2 0.2-0.2 0.4 0 0.4-0.4 0.8-1.8 1.5-0.8 2-0.1 0.5 0 0.7 0.3 0.8-0.1 0.7-0.2 0.8-1.3 3 3.1 1 0.4-0.2 0.2 0 0.4 0.2 0.6 0.3 2.5-0.9 0.9 0 0.8-0.3 0.3 0 0.2 0.1 0.2 0.3 0.4 0.3 0.9 0.2 0.6 0.1 0.5-0.1 0.4-0.2 0.5-0.5 0.4-0.3 0.6-0.6 0.3-0.2 1.6-0.4 2.1-0.3 1.6-0.5 0.5 0.2 0.3 0.2 1.6 2.5 1.5 2.2 0.5 0.4 0.2 0.2 0.3 0.4 0 0.5 0 0.5-0.3 1-0.2 0.5-0.6 0.7-0.5 0.6-2.5 1.5-0.2 1 0.3 4.3 0.5 2.4 0.1 1.9-1.6 1.4-0.9 0-0.2-0.3-0.1-0.2-0.2 0-0.1 0.2-0.1 0.6 0.1 1.1 0 0.6-0.2 0.4-0.7 0.7-0.6 0.4-3.6 1.3-0.8 0.3-0.1 0.7-0.1 2.2 0.3 2.8 0.1 0.3 0.2 0 0.3 0 0.3 0.1 1 0.8 0.7 0.2 0.2 0.2 0.1 0.5 0 0.4-0.4 1.4-0.2 0.4-2.5 5.3-1.4 2.5-1 0.6-0.9 1.3-3.1 3.9-1.1 1.1 2 2 2.4 2 0.9 0.6 0.8 0.3 0.3 0.4 0.2 0.5 0 0.8-0.2 0.3-0.2 0.2-0.2 0.1-0.2 0.3 0 0.5 0.1 0.6 1 2.3 0.2 0.8 0.1 1.5 0.5 1 0.1 1.1-0.1 0.3-0.1 0.4-0.3 0.2-0.2 0.1-0.2 0.8-0.1 0.3-0.6-0.1-0.9 0.1-2.6 1-1.1 0-0.8-0.2-0.7-0.4-1-0.3-5.4-1.1-1.7-0.7-1.4-1-0.5-1.3-0.2-1.5-0.5-1.7-0.3-5.4-0.7-2.4-2.1-0.5-0.2 0-1.5 0.2-1.9-0.7-3.3-2.3-1.1-1.6-0.3-3.7-1.5-1.1-1.3-0.1-4 1.6-1 0.2-1 0-1.1-0.3-1.2-0.4-0.5-0.5-0.1-0.5 0-0.6-0.2-0.5-0.5-0.5-0.2-0.1-0.3 0.2-0.6 0-3.4-1.3-3.6-0.2-2.1-1-6.6-5-1.1-0.5-3-0.8-0.9-0.5-1.2-0.9-4.8-5.3-0.6-0.5-0.3-0.3-2.8-0.6-0.8 0.1-0.7 0.4-0.3-0.8-1.1-1.2-0.2-0.5 0-1-0.5-0.1-0.7 0.2-0.8 0.2-1.2-0.4-1-0.8-0.8-1-0.5-1.1-0.5-0.9-1.5-1.2-1-1.5-3-2 0.8-0.4-0.4-0.9-0.6-0.5-0.7-0.5-0.4-0.5-0.1-0.8 0.1-1 0-0.9-0.3-0.8-0.4-0.1-0.6 0.3-1 0.5-0.4-0.5-0.6-0.5-0.6-0.1-0.5-0.4-1.1-0.6-0.5-0.3-1.3-0.8-0.7-0.8-0.5-0.7 0.3-0.9 0.4-0.5 0.8-0.3 0.9-0.2 0.9-0.9 0.8-1.5 0.7-0.9 1.3-1.3 1.1-1.2 0.7-0.8 1-0.8 2.4-0.6 1.1 0.2 0.9-0.1 1.1 0.3 1 0.4 1 0.3 1.7 0.1 1.2 0.2 1.4 0.2 0.3 0.1 0.3 0.5 0.5 0.3 0.5 0.2 0.5-0.1 0-0.7 0.1-0.4 0.1-0.8 0.7-0.8 0.4-1.3-0.4-0.8 0.1-0.7 0-0.2 0.2-0.3 0.1-0.3 0-0.4-0.1-0.3-0.2 0.2-0.3 0.6-0.7 0.4-1 0-0.3-0.7 0-0.9 0.2-1.1 0-0.7 0.3-1.3 0.1-0.6-0.2-0.4-0.4-0.5-0.5-0.5-0.5-0.2-0.6 0.4-0.4 0.6-0.5 1.6-0.6 0.3-0.4-0.4 0-1-0.2-1.4-0.6-1.8-0.5-2.4-0.4-1.7-0.2-2.2 0.6-1.2 0.6-1.4 0.4-1.3 1.4-0.6 0.4-1.4 1.5-2.7 1.1-2.2 0.6-1.5 0.7-0.8-0.3 0.8 0 0.9 0.1 0.8 0.2 0.9 0.8-2.3 0.4-2.5 0.6-1 0.9 0.3 1.3-1.6 1.2-1.5 1.3-1.8 1-0.4 0.9-0.9 1.1-1 1.3-0.8 0.6 0 0.5 1.2 0.6 1.4 0.8 1.3 1 1.4 1.2 0.1-0.6-1.8-0.3-1.4 0.1-1.6 0.4-0.7 0.7-0.7 0.6 0.9 0.4 1.5-0.3 1.2 0.5 0.8 0.4 1.1 0.4 0.9 0.8 0.8 0.4 0.3 1.8 0.9 0.8 0.3 0.5-0.1 0.9-0.5 1-0.3 0-0.3 0-0.4 0-0.3 0-0.1 0.1-0.3 0.1-0.2 0-1.8-0.2-0.8-0.2-0.8-0.5-0.8-0.3-0.9 0.5-0.5 1.1 0.2z"
                id="CONAR"
                onClick={() => handleDepartmentClick('CONAR')}
                className={`department ${selectedDepartment === 'Nariño' ? 'selected' : ''}`}
                title="Nariño"
              />
              <path
                d="M357.9 721.8l0.1-0.3 0.2-0.8 0.2-0.1 0.3-0.2  0.1-0.4 0.1-0.3-0.1-1.1-0.5-1-0.1-1.5-0.2-0.8-1-2.3-0.1-0.6 0-0.5 0.2-0.3 0.2-0.1 0.2-0.2 0.2-0.3 0-0.8-0.2-0.5-0.3-0.4-0.8-0.3-0.9-0.6-2.4-2-2-2 1.1-1.1 3.1-3.9 0.9-1.3 1-0.6 1.4-2.5 2.5-5.3 0.2-0.4 0.4-1.4 0-0.4-0.1-0.5-0.2-0.2-0.7-0.2-1-0.8-0.3-0.1-0.3  0-0.2 0-0.1-0.3-0.3-2.8 0.1-2.2 0.1-0.7 0.8-0.3 3.6-1.3 0.6-0.4 0.7-0.7 0.2-0.4 0-0.6-0.1-1.1 0.1-0.6 0.1-0.2 0.2 0 0.1 0.2 0.2 0.3 0.9 0 1.6-1.4 1.7 0 4 0.3 1.3-0.3 1.4-0.8 1.1-1.3 2.7-4 0.8-0.2 0.8 0.3 0.9 0.6 1.7 0.7 0.8 1 1 1.5 0.1 0.6 0.9 0.8 0.6 1.4 0.2 0.7 0 0.7-0.2 0.9-0.9 1.7-0.2 0.9-0.2 4.4 0.5 2.2 1.2 1.9 1 0.7 3.6 1.1 2 1 1.6 0.3 7.1 0.2 0.8-0.2 0.5-0.3 0.5-0.4 0.6-0.5 0.7-0.3 0.7-0.2 1.6 0.1 0.9-0.2 0.4-0.5 0.3-0.6 0.5-0.5 0.1 0 0.7-0.1 0.7 0.1 1.4 0.6 0.9 0 1.9-0.2 0.9 0.2 0.7 0.6 0.2 0.6 0 0.7 0.1 0.9 0.6 1.1 2.8 3.3 0.9 0.5 2 0.2 1 0.5 0.9 0.6 0.9 0.3 1 0 3.4-0.2 2.3 0.2 2.1 1 3.1 3.3 2 0.7 4.3 0.3 2.8-0.4 1 0.2 1.2 0.6 0.6 0.3 0.4 0.5 0.2 0.5-0.1 1 0.1 0.5 0.4 0.8 1.2 1.4 0.4 0.9 0 0.8-0.4 1.7 0.2 0.9 0.7 1.7 0.8 1.1 1.1 0.4 1.7-0.4 1.2-0.5 0.6 0 0.7 0.3 0.1 0.3 0.1 0.8 0.2 0.3 0.5 0.1 0.5 0 1-0.3 1.9 0.4 0.6 1.4-0.4 3.4 0.2 0.7 0.7 2.3 0.2 1.7 0.4 0.5 2.2 0.8 3.2 1.7 5.7 1.1 1.8 1 1.3 1.5 0.3 2.1-0.3 0.6-0.5 0.6-0.2 0.6 0.7 0.4 1 0.4 0.2 0.2-0.2 0.4-0.7 1.3-0.3 0.4-0.1 0.3 0.6 1.1 0.1 0.4 0.1 0.9 0.2 0.7 0.4 0.2 0.4-0.1 0.8 0.2 0.4-0.1 0.3 0.1 0.5 0.2 0.2 0.4 0.4 1.1 0.2 0.4 0.8 0.4 1 0.4 1 0.1 0.8-0.1 0.9-0.2 0.5 0.2 0.4 0.3 0.9 0.1 0.7-0.3 0.5-1.5 0.8-0.3 0.8 0.3 0.3 0.8 0 0.8 0.4 0.6 0.8 0 1.8-0.7 1.1 0.2 1.8 0.9 0.5 0.4 0.3 0.5 0.1 0.4 0 0.4 0.5 1.5 0.2 0.4 0.4 0.5 0.6 0.3 0.4-0.1 0.4-0.2 0.5-0.1 0.5 0.1 0.3-0.1 0.3 0 0.5 0.3 0.2 0.3 0.2 1 0.3 0.3 0.9 0.1 0.9-0.4 0.9-0.3 0.9 0.5 2.7 2.1 1.7 1.9 1.1 0.8 2.4 1 3.9 1.1 0 0.1-27.8 8.6-0.1-0.5-0.1-0.6-0.3-0.2-0.6 0-0.3-0.1-0.5-0.7-0.6-0.8-0.6-0.5-3.1-1.8-1.3-1.1-2.2-2.2-1.4-2.4-0.5-0.4-0.5 0.1-0.4 0.2-0.4 0.3-0.2 0.1-0.7 0-0.3-0.2-0.2-0.3-0.2-0.2-0.4-0.3-0.2-0.2-0.3-0.2-1.3-0.1-1-0.2-0.5-0.1-0.9-0.3 0.4-0.7 1.4-1-1.7-3.6-0.7-1-1.1-0.9-0.6 0.1-1.3 2.1-0.5 0.4-0.5 0-0.9-0.3-1.7-0.3-1.1-0.5-0.7-0.5-2-2.3-0.4-0.2-0.4-0.2-0.9 0-0.5-0.1-0.5-0.6-2-2.7-1-0.8-1.1-0.5-2.2-0.7-1.1-0.1-0.7 0.2-0.5 0.5-0.2 1-0.3 0.6-0.6 0.8-0.8 0.6-0.7 0.3-1-0.6-3.2-1.2-2.8-0.5-1-0.7-1.2-0.4-3-1.8-2.4-2.2-0.9-0.3-0.5-0.3-0.6-0.7-0.8-0.7-1-0.4-1 0.1-2.2 0.5-1.1 0.2-1.2-0.1-1-0.3-0.8-0.3-1.4-0.8-2-1.5-0.5-0.7-3-1.9-1.3-1.2-0.6-0.8-0.2-1-0.2-0.6-3.4-4.3-0.3-0.6-0.4-0.8-1.2 0.2-1.3 0.4-0.9 0-0.3-0.4-0.2-1.3-0.3-0.5-0.5-0.2-0.5-0.1-1.1 0.1-1.3-0.1-1.1-0.2-1-0.5-1-0.6-1.4-1.5-0.5-0.2-0.5 0.1-0.9 0.7-0.3 0.2-0.3 0.2-1.2 1.5-0.5 0.2-0.6 0.1-1.1 0.1-0.4-0.1 0 0.3-0.1 3.8 0.5 3.4-0.9 0.6-5 0.5-1.3 0.7-0.8 0.1-0.9-0.3-1.4-1.3-0.8-0.5-0.7-0.2-2.5-0.3-1.7-0.5-0.7 0.2 0.2 2.1-0.8 0-1.8-0.8-0.7-0.1-3.5 0.5-0.7 0-0.8-0.3-0.8-0.6-1.1-1.1-0.6-0.4-0.8-0.3-0.6-0.1-2 0-1.6-0.5-1.9-2.2-1.1-0.3z"
                id="COPUT"
                onClick={() => handleDepartmentClick('COPUT')}
                className={`department ${selectedDepartment === 'Putumayo' ? 'selected' : ''}`}
                title="Putumayo"
              />
              {/* Agrega más departamentos aquí */}
            </g>
          </svg>
        </div>
        <div className="game-info">
          <h3 className="subtitle">Ubica el departamento: {targetDepartment}</h3>
          <p>Departamento seleccionado: {selectedDepartment || "Ninguno"}</p>
          <button
            onClick={handleSubmit}
            disabled={!selectedDepartment || showResult}
            className="button submit-button"
          >
            Verificar
          </button>
          {showResult && (
            <div className={`result ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect ? "¡Correcto!" : `Incorrecto. El departamento correcto es ${targetDepartment}.`}
            </div>
          )}
        </div>
        <div className="button-container">
          <button
            onClick={handleNextDepartment}
            className="button next-button"
          >
            Siguiente Departamento
          </button>
          <button
            onClick={onClose}
            className="button close-button"
          >
            Cerrar Mapa
          </button>
        </div>
      </div>
    </div>
  )
}
