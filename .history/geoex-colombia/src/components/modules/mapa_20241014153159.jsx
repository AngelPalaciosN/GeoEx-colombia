import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    <div id="mapa" className="container">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>Quiz de Geografía de Colombia</CardTitle>
          <CardDescription>Haz clic en el departamento correcto en el mapa para responder</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3">
            <svg viewBox="0 0 800 1000" className="w-full h-auto">
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
          <div className="w-full md:w-1/3 space-y-4">
            <h3 className="text-lg font-semibold">{currentQuestion.question}</h3>
            <p>Departamento seleccionado: {selectedDepartment || "Ninguno"}</p>
            <Button onClick={handleSubmit} disabled={!selectedDepartment || showResult}>
              Enviar Respuesta
            </Button>
            {showResult && (
              <div className={`p-4 rounded-md ${isCorrect ? "bg-green-100" : "bg-red-100"}`}>
                {isCorrect ? "¡Correcto!" : `Incorrecto. La respuesta correcta es ${currentQuestion.answer}.`}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleNextQuestion} disabled={!showResult && currentQuestion.id !== 0}>
            {currentQuestion.id === 0 ? "Reiniciar Quiz" : "Siguiente Pregunta"}
          </Button>
        </CardFooter>
      </Card>
      <Button onClick={onClose}>Cerrar Mapa</Button>
    </div>
  );
}

export default Mapa;