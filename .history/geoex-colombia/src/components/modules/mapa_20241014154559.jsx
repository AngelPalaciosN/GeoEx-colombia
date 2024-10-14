import React, { useState } from 'react';
import backgroundImage from 'C:/Users/Angel David Palacios/Documents/GIthub_2/GeoEx-colombia/geoex-colombia/src/images/co.svg';

const departments = [
  "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca",
  "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta",
  "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander",
  "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"
];

function Mapa({ onClose }) {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [targetDepartment, setTargetDepartment] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
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

  React.useEffect(() => {
    handleNextDepartment();
  }, []);

  return (
    <div id="mapa" className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ 
        border: '1px solid #ccc', 
        borderRadius: '8px', 
        padding: '20px', 
        marginBottom: '20px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Ubicación de Departamentos de Colombia</h2>
        <p style={{ marginBottom: '20px' }}>Haz clic en el departamento correcto en el mapa</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ width: '100%' }}>
            {/* Aquí iría el mapa detallado. Por ahora, lo dejamos como un placeholder */}
            <div style={{ width: '100%', height: '400px', backgroundColor: 'rgba(200, 200, 200, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              Mapa placeholder
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Ubica el departamento: {targetDepartment}</h3>
            <p>Departamento seleccionado: {selectedDepartment || "Ninguno"}</p>
            <button 
              onClick={handleSubmit} 
              disabled={!selectedDepartment || showResult}
              style={{ 
                padding: '10px 20px', 
                backgroundColor: (!selectedDepartment || showResult) ? '#ccc' : '#007bff', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: (!selectedDepartment || showResult) ? 'not-allowed' : 'pointer',
                marginTop: '10px'
              }}
            >
              Verificar
            </button>
            {showResult && (
              <div style={{ 
                padding: '10px', 
                borderRadius: '5px', 
                backgroundColor: isCorrect ? 'rgba(212, 237, 218, 0.7)' : 'rgba(248, 215, 218, 0.7)',
                marginTop: '10px'
              }}>
                {isCorrect ? "¡Correcto!" : `Incorrecto. El departamento correcto es ${targetDepartment}.`}
              </div>
            )}
          </div>
        </div>
        <button 
          onClick={handleNextDepartment} 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          Siguiente Departamento
        </button>
      </div>
      <button 
        onClick={onClose}
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#dc3545', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer'
        }}
      >
        Cerrar Mapa
      </button>
    </div>
  );
}

export default Mapa;