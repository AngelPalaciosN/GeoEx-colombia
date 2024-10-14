'use client'

import React, { useState, useEffect } from 'react'
import '../../scss/mapa.scss'
import { ReactComponent as ColombiaMap } from '../../images/co.svg'

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

  const handleDepartmentClick = (event) => {
    const departmentId = event.target.id;
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
          <ColombiaMap
            className="map"
            onClick={handleDepartmentClick}
          />
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