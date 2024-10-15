import React, { useState, useEffect, useCallback } from 'react';
import '../../scss/mapa.scss';
import { ReactComponent as ColombiaMap } from '../../images/co.svg';
import Swal from 'sweetalert2';

const departments = [
  "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca",
  "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta",
  "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander",
  "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada", "Distrito Capital de Bogotá"
];

const departmentIds = {
  "Nariño": "CONAR",
  "Putumayo": "COPUT",
  // ... (rest of the departmentIds object remains the same)
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
    setNextQuestionMessage("");

    const correctDepartmentId = departmentIds[targetDepartment];
    const correctElement = document.getElementById(correctDepartmentId);
    if (correctElement) {
      correctElement.classList.remove('correct-department');
    }
  }, [targetDepartment]);

  useEffect(() => {
    handleNextDepartment();
  }, [handleNextDepartment]);

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

      setNextQuestionMessage("La próxima pregunta aparecerá en 5 segundos...");
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
          {nextQuestionMessage && <p>{nextQuestionMessage}</p>}
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