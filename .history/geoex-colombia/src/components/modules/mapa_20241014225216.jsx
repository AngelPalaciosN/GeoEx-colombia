import React, { useState, useEffect, useCallback } from 'react';
import '../../scss/mapa.scss';
import { ReactComponent as ColombiaMap } from '../../images/co.svg';
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

const departments = [
  "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca",
  "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta",
  "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "Santander",
  "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada", "Distrito Capital de Bogotá"
];

const departmentIds = {
  "Nariño": "CONAR", "Putumayo": "COPUT", "Chocó": "COCHO", "Guainía": "COGUA", "Vaupés": "COVAU",
  "Amazonas": "COAMA", "La Guajira": "COLAG", "Cesar": "COCES", "Norte de Santander": "CONSA",
  "Arauca": "COARA", "Boyacá": "COBOY", "Vichada": "COVID", "Cauca": "COCAU", "Valle del Cauca": "COVAC",
  "Antioquia": "COANT", "Córdoba": "COCOR", "Sucre": "COSUC", "Bolívar": "COBOL", "Atlántico": "COATL",
  "Magdalena": "COMAG", "Caquetá": "COCAQ", "Huila": "COHUI", "Guaviare": "COGUV", "Caldas": "COCAL",
  "Casanare": "COCAS", "Meta": "COMET", "Distrito Capital de Bogotá": "CODC", "Santander": "COSAN",
  "Tolima": "COTOL", "Quindío": "COQUI", "Cundinamarca": "COCUN", "Risaralda": "CORIS"
};

export default function Mapa({ onClose }) {
  const [targetDepartment, setTargetDepartment] = useState("");
  const [countdown, setCountdown] = useState(10);
  const [setShowNextQuestionMessage] = useState(false);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleNextDepartment = useCallback(() => {
    const randomDepartment = departments[Math.floor(Math.random() * departments.length)];
    setTargetDepartment(randomDepartment);
    setCountdown(10);
    setShowNextQuestionMessage(false);
    setIsAnswerSubmitted(false);
    setHasInteracted(false); // Reinicia la interacción

    const previousCorrectId = departmentIds[targetDepartment];
    if (previousCorrectId) {
      const previousCorrectElement = document.getElementById(previousCorrectId);
      if (previousCorrectElement) {
        previousCorrectElement.classList.remove('correct-department');
      }
    }
  }, [targetDepartment]);

  useEffect(() => {
    handleNextDepartment();
  }, [handleNextDepartment]);

  useEffect(() => {
    let interval;
    if (isAnswerSubmitted) {
      interval = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown > 1) {
            return prevCountdown - 1;
          } else {
            clearInterval(interval);
            handleNextDepartment();
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isAnswerSubmitted, handleNextDepartment]);

  const handleDepartmentClick = (event) => {
    const departmentId = event.target.id;
    const department = Object.keys(departmentIds).find(key => departmentIds[key] === departmentId);

    if (department) {
      setHasInteracted(true);
      const correct = department === targetDepartment;
      const correctDepartmentId = departmentIds[targetDepartment];

      Swal.fire({
        title: correct ? '¡Correcto!' : 'Incorrecto',
        text: `Elegiste ${department}. La respuesta correcta es ${targetDepartment}.`,
        icon: correct ? 'success' : 'error',
        confirmButtonText: 'Continuar',
      }).then(() => {
        if (!correct) {
          const correctElement = document.getElementById(correctDepartmentId);
          if (correctElement) {
            correctElement.classList.add('correct-department');
          }
        }
        setShowNextQuestionMessage(true);
        setIsAnswerSubmitted(true);
      });
    }
  };

  return (
    <Card className="card">
      <div className="card-content" style={{ textAlign: 'center' }}>
        <h2 className="title">Ubicación de Departamentos de Colombia</h2>
        <p className="subtitle">Haz clic en el departamento correcto en el mapa</p>
        <div className="map-container">
          <ColombiaMap className="map" onClick={handleDepartmentClick} />
        </div>
        <div className="game-info">
          <h3 className="subtitle">Ubica el departamento: {targetDepartment}</h3>
        </div>
        {hasInteracted && countdown === 0 && (
          <div className="next-question-message">¡Pronto aparecerá la próxima pregunta!</div>
        )}
        {hasInteracted && countdown > 0 && (
          <div className="next-question-message">La siguiente pregunta vendrá en {countdown}...</div>
        )}
        <div className="button-container">
          <Button
            onClick={onClose}
            variant="contained"
            color="error"
            className="close-button"
            style={{ display: 'block', margin: '0 auto' }}
          >
            Cerrar Mapa
          </Button>
        </div>
      </div>
    </Card>
  );
}
