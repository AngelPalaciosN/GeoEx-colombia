import React, { useState } from 'react';

const questions = [
  { id: 1, question: "¿Qué departamento de Colombia tiene la Sierra Nevada de Santa Marta?", answer: "Magdalena" },
  { id: 2, question: "¿En qué departamento se encuentra el Desierto de la Tatacoa?", answer: "Huila" },
  { id: 3, question: "¿Qué departamento alberga el Parque Nacional Natural Los Nevados?", answer: "Caldas" },
];

const departments = [
  "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca",
  "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta",
  "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander",
  "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"
];

function Mapa({ onClose }) {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department);
  };

  const handleSubmit = () => {
    setIsCorrect(selectedDepartment === currentQuestion.answer);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    const nextQuestionIndex = questions.findIndex(q => q.id === currentQuestion.id) + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestion(questions[nextQuestionIndex]);
      setSelectedDepartment("");
      setShowResult(false);
    } else {
      // Quiz finished
      setCurrentQuestion({ id: 0, question: "¡Has completado el quiz!", answer: "" });
    }
  };

  return (
    <div id="mapa" className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Quiz de Geografía de Colombia</h2>
        <p style={{ marginBottom: '20px' }}>Haz clic en el departamento correcto en el mapa para responder</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ width: '100%' }}>
            <svg viewBox="0 0 800 1000" style={{ width: '100%', height: 'auto' }}>
              {departments.map((department) => (
                <path
                  key={department}
                  d={`M${Math.random() * 700 + 50},${Math.random() * 900 + 50} l50,0 l0,50 l-50,0 z`}
                  fill={selectedDepartment === department ? "lightblue" : "lightgray"}
                  stroke="white"
                  strokeWidth="2"
                  onClick={() => handleDepartmentClick(department)}
                >
                  <title>{department}</title>
                </path>
              ))}
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{currentQuestion.question}</h3>
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
              Enviar Respuesta
            </button>
            {showResult && (
              <div style={{ 
                padding: '10px', 
                borderRadius: '5px', 
                backgroundColor: isCorrect ? '#d4edda' : '#f8d7da',
                marginTop: '10px'
              }}>
                {isCorrect ? "¡Correcto!" : `Incorrecto. La respuesta correcta es ${currentQuestion.answer}.`}
              </div>
            )}
          </div>
        </div>
        <button 
          onClick={handleNextQuestion} 
          disabled={!showResult && currentQuestion.id !== 0}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: (!showResult && currentQuestion.id !== 0) ? '#ccc' : '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: (!showResult && currentQuestion.id !== 0) ? 'not-allowed' : 'pointer',
            marginTop: '20px'
          }}
        >
          {currentQuestion.id === 0 ? "Reiniciar Quiz" : "Siguiente Pregunta"}
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