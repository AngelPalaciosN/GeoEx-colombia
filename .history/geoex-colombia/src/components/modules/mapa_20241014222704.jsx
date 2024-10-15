// src/components/modules/mapa.jsx
import React, { useState, useEffect, useCallback } from 'react';
import '../../scss/mapa.scss';
import { ReactComponent as ColombiaMap } from '../../images/co.svg';
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { CheckCircle, XCircle } from 'lucide-react';

const departments = [
  "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca",
  "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta",
  "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "Santander",
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
  const [targetDepartment, setTargetDepartment] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showNextQuestionMessage, setShowNextQuestionMessage] = useState(false);

  const handleNextDepartment = useCallback(() => {
    const randomDepartment = departments[Math.floor(Math.random() * departments.length)];
    setTargetDepartment(randomDepartment);
    setSelectedDepartment("");
    setShowResult(false);
    setShowNextQuestionMessage(false);

    // Remover clases de departamentos previamente resaltados
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

  const handleDepartmentClick = (event) => {
    const departmentId = event.target.id;
    const department = Object.keys(departmentIds).find(key => departmentIds[key] === departmentId);
  
    if (department) {
      setSelectedDepartment(department);
      const correct = department === targetDepartment;
      setIsCorrect(correct);
      setShowResult(true);
  
      Swal.fire({
        title: correct ? `¡Correcto! elegiste ${department}` : `Incorrecto, elegiste ${department}`,
        text: `Elegiste ${department}. La respuesta correcta es ${targetDepartment}.`,
        icon: correct ? 'success' : 'error',
        confirmButtonText: 'Continuar',
        html: `<div style="display: flex; align-items: center; gap: 10px;">
                ${correct ? '<CheckCircle />' : '<XCircle />'} ${correct ? '¡Correcto!' : 'Incorrecto'}
                </div>`,
      }).then(() => {
        if (!correct) {
          // Resaltar el departamento correcto
          const correctDepartmentId = departmentIds[targetDepartment];
          const correctElement = document.getElementById(correctDepartmentId);
          if (correctElement) {
            correctElement.classList.add('correct-department');
          }
        }
  
        // Mostrar mensaje de próxima pregunta
        setShowNextQuestionMessage(true);
        setTimeout(() => {
          handleNextDepartment();
        }, 5000);
      });
    }
  };
  

  return (
    <Card className="card">
      <div className="card-content" style={{ textAlign: 'center' }}> {/* Centrando todo el texto */}
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
        </div>
        {showNextQuestionMessage && (
          <div className="next-question-message">
            La próxima pregunta aparecerá en 5 segundos...
          </div>
        )}
        <div className="button-container">
          <Button
            onClick={onClose}
            variant="contained"
            color="error"
            className="close-button"
            style={{ display: 'block', margin: '0 auto' }} // Centrando el botón
          >
            Cerrar Mapa
          </Button>
        </div>
      </div>
    </Card>
  );
}
