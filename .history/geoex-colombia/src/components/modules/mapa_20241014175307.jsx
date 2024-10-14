'use client';

import React, { useState, useEffect, useCallback } from 'react';
import '../../scss/mapa.scss';
import { ReactComponent as ColombiaMap } from '../../images/co.svg';
import Swal from 'sweetalert2'; // Importar SweetAlert

const departments = [
  "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca",
  "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta",
  "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander",
  "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada", "Distrito Capital de Bogotá"
];

const departmentIds = {
  "Nariño": "CONAR",
  "Putumayo": "COPUT",
  "Chocó": "COCHO",
  "Guainía": "COGUA",
  "Vaupés": "COVAU",
  "Amazonas": "COAMA",
  "La Guajira": "COLAG",
  "Cesar": "COCES",
  "Norte de Santander": "CONSA",
  "Arauca": "COARA",
  "Boyacá": "COBOY",
  "Vichada": "COVID",
  "Cauca": "COCAU",
  "Valle del Cauca": "COVAC",
  "Antioquia": "COANT",
  "Córdoba": "COCOR",
  "Sucre": "COSUC",
  "Bolívar": "COBOL",
  "Atlántico": "COATL",
  "Magdalena": "COMAG",
  "San Andrés y Providencia": "COSAP",
  "Caquetá": "COCAQ",
  "Huila": "COHUI",
  "Guaviare": "COGUV",
  "Caldas": "COCAL",
  "Casanare": "COCAS",
  "Meta": "COMET",
  "Distrito Capital de Bogotá": "CODC",
  "Santander": "COSAN",
  "Tolima": "COTOL",
  "Quindío": "COQUI",
  "Cundinamarca": "COCUN",
  "Risaralda": "CORIS"
};

export default function Mapa({ onClose }) {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [targetDepartment, setTargetDepartment] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [nextQuestionMessage, setNextQuestionMessage] = useState("");

  const handleNextDepartment = useCallback(() => {
    const randomDepartment = departments[Math.floor(Math.random() * departments.length)];
    setTargetDepartment(randomDepartment);
    setSelectedDepartment("");
    setShowResult(false);
    setNextQuestionMessage(""); // Reiniciar mensaje

    const correctDepartmentId = departmentIds[targetDepartment];
    const correctElement = document.getElementById(correctDepartmentId);
    if (correctElement) {
      correctElement.classList.remove('correct-department');
    }
  }, [targetDepartment]); // Añadir targetDepartment como dependencia

  useEffect(() => {
    handleNextDepartment();

    // Iniciar un temporizador para mostrar el mensaje de siguiente pregunta
    const timer = setTimeout(() => {
      setNextQuestionMessage("Próxima pregunta en 5 segundos...");
      setTimeout(handleNextDepartment, 5000); // Cambia de departamento después de 5 segundos
    }, 2000); // Mostrar mensaje después de 2 segundos

    // Limpiar el timer al desmontar el componente
    return () => clearTimeout(timer);
  }, [handleNextDepartment]); // Añadir handleNextDepartment aquí

  const handleDepartmentClick = (event) => {
    const departmentId = event.target.id;
    const department = Object.keys(departmentIds).find(key => departmentIds[key] === departmentId);
    setSelectedDepartment(department || "");
  };

  const handleSubmit = () => {
    const correct = selectedDepartment === targetDepartment;
    setIsCorrect(correct);
    setShowResult(true);

    Swal.fire({
      title: correct ? '¡Correcto!' : 'Incorrecto',
      text: correct ? "¡Bien hecho!" : `Elegiste ${selectedDepartment}. Revisa el mapa para ver la opción correcta.`,
      icon: correct ? 'success' : 'error',
      confirmButtonText: 'Continuar',
    }).then(() => {
      if (!correct) {
        const correctDepartmentId = departmentIds[targetDepartment];
        const correctElement = document.getElementById(correctDepartmentId);
        if (correctElement) {
          correctElement.classList.add('correct-department');
        }
      }

      setTimeout(() => {
        handleNextDepartment();
      }, 5000);
    });
  };

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
          {nextQuestionMessage && <p>{nextQuestionMessage}</p>} {/* Mostrar mensaje aquí */}
          <button
            onClick={handleSubmit}
            disabled={!selectedDepartment || showResult}
            className="button submit-button"
          >
            Verificar
          </button>
          {showResult && (
            <div className={`result ${isCorrect ? 'correct' : 'incorrect'}`}>
              {isCorrect 
                ? "¡Correcto!" 
                : `Incorrecto, Elegiste ${selectedDepartment}, revisa el mapa para ver la opción correcta`}
            </div>
          )}
        </div>
        <div className="button-container">
          <button
            onClick={onClose}
            className="button close-button"
          >
            Cerrar Mapa
          </button>
        </div>
      </div>
    </div>
  );
}
