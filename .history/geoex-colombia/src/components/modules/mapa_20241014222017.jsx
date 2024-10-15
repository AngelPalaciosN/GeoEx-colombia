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

  const handleNextDepartment = useCallback(() => {
    const randomDepartment = departments[Math.floor(Math.random() * departments.length)];
    setTargetDepartment(randomDepartment);
    setSelectedDepartment("");
    setShowResult(false);

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
        title: correct ? '¡Correcto!' : 'Incorrecto',
        text: correct 
          ? `¡Bien hecho! Has seleccionado ${department}.` 
          : `Elegiste ${department}. La respuesta correcta es ${targetDepartment}.`,
        icon: correct ? 'success' : 'error',
        confirmButtonText: 'Continuar',
        html: correct 
          ? `<div style="display: flex; align-items: center; gap: 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-check-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm-1 15l-4-4 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8Z"/>
              </svg> ¡Correcto!
            </div>`
          : `<div style="display: flex; align-items: center; gap: 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" class="lucide lucide-x-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg> Incorrecto
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

        // Mostrar mensaje de siguiente pregunta
        Swal.fire({
          title: 'Próxima pregunta',
          text: 'La próxima pregunta aparecerá en 5 segundos...',
          timer: 5000,
          showConfirmButton: false,
        });

        // Cambiar al siguiente departamento después de 5 segundos
        setTimeout(() => {
          handleNextDepartment();
        }, 5000);
      });
    }
  };

  return (
    <Card className="card">
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
        </div>
        <div className="button-container">
          <Button
            onClick={onClose}
            variant="contained"
            color="error"
            className="close-button"
          >
            Cerrar Mapa
          </Button>
        </div>
      </div>
    </Card>
  );
}
