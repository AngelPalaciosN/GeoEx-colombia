'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

const departments = [
  "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca",
  "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta",
  "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander",
  "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"
];

const departmentIds: { [key: string]: string } = {
  "Nariño": "CONAR",
  "Putumayo": "COPUT",
  // Add more departments here
};

export default function Mapa({ onClose }: { onClose: () => void }) {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [targetDepartment, setTargetDepartment] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleDepartmentClick = (departmentId: string) => {
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
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Ubicación de Departamentos de Colombia</h2>
        <p className="mb-4">Haz clic en el departamento correcto en el mapa</p>
        <div className="flex flex-col gap-4">
          <div className="w-full">
            <TooltipProvider>
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
                className="mx-auto"
                style={{
                  backgroundImage: `url(/placeholder.svg?height=400&width=400)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <g id="departments">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <path
                        d="M308.8 605.6l4.6 3.1 1.5 1.6 0.1 1 0.3 1.1 0.6 1.8 0.1 0.6 0 0.5-0.2 0.6-0.6 1.8-0.1 0.4 0 0.5 0.1 0.5 0.8 2 3.7 5.3 0.1 0.5 0.2 1.7 0.2 0.4 0.5 0.5 1.4 0.6 1.6 0.4 1.8 0.6 1.2 0.1 0.9 0 2.4-0.8 1.6 0 1.5-0.6 0.8-0.6 0.3-0.3 1.4-0.2 1.4-0.2 1-0.3 0.1-0.2 0.5-0.3 0.2-0.2 0.3-0.1 0.9-0.1 0.6-0.1 0.8 0 0.5 0.1 0.9 0.4 4.6 2 0.5 0.9-0.1 1.5-0.8 1.2-0.2 0.8-0.2 0.3-0.1 0.5 0.2 0.4 0.4 0.4 3.1 2.3 0.7 0.4 0.5 0.2 1 0.5 0.7 1.3-0.6 1.5-0.1 0.2-0.3 0.1-0.6 0.2-0.2 0.2-0.2 0.4 0 0.4-0.4 0.8-1.8 1.5-0.8 2-0.1 0.5 0 0.7 0.3 0.8-0.1 0.7-0.2 0.8-1.3 3 3.1 1 0.4-0.2 0.2 0 0.4 0.2 0.6 0.3 2.5-0.9 0.9 0 0.8-0.3 0.3 0 0.2 0.1 0.2 0.3 0.4 0.3 0.9 0.2 0.6 0.1 0.5-0.1 0.4-0.2 0.5-0.5 0.4-0.3 0.6-0.6 0.3-0.2 1.6-0.4 2.1-0.3 1.6-0.5 0.5 0.2 0.3 0.2 1.6 2.5 1.5 2.2 0.5 0.4 0.2 0.2 0.3 0.4 0 0.5 0 0.5-0.3 1-0.2 0.5-0.6 0.7-0.5 0.6-2.5 1.5-0.2 1 0.3 4.3 0.5 2.4 0.1 1.9-1.6 1.4-0.9 0-0.2-0.3-0.1-0.2-0.2 0-0.1 0.2-0.1 0.6 0.1 1.1 0 0.6-0.2 0.4-0.7 0.7-0.6 0.4-3.6 1.3-0.8 0.3-0.1 0.7-0.1 2.2 0.3 2.8 0.1 0.3 0.2 0 0.3 0 0.3 0.1 1 0.8 0.7 0.2 0.2 0.2 0.1 0.5 0 0.4-0.4 1.4-0.2 0.4-2.5 5.3-1.4 2.5-1 0.6-0.9 1.3-3.1 3.9-1.1 1.1 2 2 2.4 2 0.9 0.6 0.8 0.3 0.3 0.4 0.2 0.5 0 0.8-0.2 0.3-0.2 0.2-0.2 0.1-0.2 0.3 0 0.5 0.1 0.6 1 2.3 0.2 0.8 0.1 1.5 0.5 1 0.1 1.1-0.1 0.3-0.1 0.4-0.3 0.2-0.2 0.1-0.2 0.8-0.1 0.3-0.6-0.1-0.9 0.1-2.6 1-1.1 0-0.8-0.2-0.7-0.4-1-0.3-5.4-1.1-1.7-0.7-1.4-1-0.5-1.3-0.2-1.5-0.5-1.7-0.3-5.4-0.7-2.4-2.1-0.5-0.2 0-1.5 0.2-1.9-0.7-3.3-2.3-1.1-1.6-0.3-3.7-1.5-1.1-1.3-0.1-4 1.6-1 0.2-1 0-1.1-0.3-1.2-0.4-0.5-0.5-0.1-0.5 0-0.6-0.2-0.5-0.5-0.5-0.2-0.1-0.3 0.2-0.6 0-3.4-1.3-3.6-0.2-2.1-1-6.6-5-1.1-0.5-3-0.8-0.9-0.5-1.2-0.9-4.8-5.3-0.6-0.5-0.3-0.3-2.8-0.6-0.8 0.1-0.7 0.4-0.3-0.8-1.1-1.2-0.2-0.5 0-1-0.5-0.1-0.7 0.2-0.8 0.2-1.2-0.4-1-0.8-0.8-1-0.5-1.1-0.5-0.9-1.5-1.2-1-1.5-3-2 0.8-0.4-0.4-0.9-0.6-0.5-0.7-0.5-0.4-0.5-0.1-0.8 0.1-1 0-0.9-0.3-0.8-0.4-0.1-0.6 0.3-1 0.5-0.4-0.5-0.6-0.5-0.6-0.1-0.5-0.4-1.1-0.6-0.5-0.3-1.3-0.8-0.7-0.8-0.5-0.7 0.3-0.9 0.4-0.5 0.8-0.3 0.9-0.2 0.9-0.9 0.8-1.5 0.7-0.9 1.3-1.3 1.1-1.2 0.7-0.8 1-0.8 2.4-0.6 1.1 0.2 0.9-0.1 1.1 0.3 1 0.4 1 0.3 1.7 0.1 1.2 0.2 1.4 0.2 0.3 0.1 0.3 0.5 0.5 0.3 0.5 0.2 0.5-0.1 0-0.7 0.1-0.4 0.1-0.8 0.7-0.8 0.4-1.3-0.4-0.8 0.1-0.7 0-0.2 0.2-0.3 0.1-0.3 0-0.4-0.1-0.3-0.2 0.2-0.3 0.6-0.7 0.4-1 0-0.3-0.7 0-0.9 0.2-1.1 0-0.7 0.3-1.3 0.1-0.6-0.2-0.4-0.4-0.5-0.5-0.5-0.5-0.2-0.6 0.4-0.4 0.6-0.5 1.6-0.6 0.3-0.4-0.4 0-1-0.2-1.4-0.6-1.8-0.5-2.4-0.4-1.7-0.2-2.2 0.6-1.2 0.6-1.4 0.4-1.3 1.4-0.6 0.4-1.4 1.5-2.7 1.1-2.2 0.6-1.5 0.7-0.8-0.3 0.8 0 0.9 0.1 0.8 0.2 0.9 0.8-2.3 0.4-2.5 0.6-1 0.9 0.3 1.3-1.6 1.2-1.5 1.3-1.8 1-0.4 0.9-0.9 1.1-1 1.3-0.8 0.6 0 0.5 1.2 0.6 1.4 0.8 1.3 1 1.4 1.2 0.1-0.6-1.8-0.3-1.4 0.1-1.6 0.4-0.7 0.7-0.7 0.6 0.9 0.4 1.5-0.3 1.2 0.5 0.8 0.4 1.1 0.4 0.9 0.8 0.8 0.4 0.3 1.8 0.9 0.8 0.3 0.5-0.1 0.9-0.5 1-0.3 0-0.3 0-0.4 0-0.3 0-0.1 0.1-0.3 0.1-0.2 0-1.8-0.2-0.8-0.2-0.8-0.5-0.8-0.3-0.9 0.5-0.5 1.1 0.2z"
                        id="CONAR"
                        onClick={() => handleDepartmentClick('CONAR')}
                        className={`cursor-pointer transition-colors duration-200 ${selectedDepartment === 'Nariño' ? 'fill-primary' : 'hover:fill-primary/70'}`}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Nariño</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <path
                        d="M357.9  721.8l0.1-0.3 0.2-0.8 0.2-0.1 0.3-0.2 0.1-0.4 0.1-0.3-0.1-1.1-0.5-1-0.1-1.5-0.2-0.8-1-2.3-0.1-0.6 0-0.5 0.2-0.3 0.2-0.1 0.2-0.2 0.2-0.3 0-0.8-0.2-0.5-0.3-0.4-0.8-0.3-0.9-0.6-2.4-2-2-2 1.1-1.1 3.1-3.9 0.9-1.3 1-0.6 1.4-2.5 2.5-5.3 0.2-0.4 0.4-1.4 0-0.4-0.1-0.5-0.2-0.2-0.7-0.2-1-0.8-0.3-0.1-0.3 0-0.2 0-0.1-0.3-0.3-2.8 0.1-2.2 0.1-0.7 0.8-0.3 3.6-1.3 0.6-0.4 0.7-0.7 0.2-0.4 0-0.6-0.1-1.1 0.1-0.6 0.1-0.2 0.2 0 0.1 0.2 0.2 0.3 0.9 0 1.6-1.4 1.7 0 4 0.3 1.3-0.3 1.4-0.8 1.1-1.3 2.7-4 0.8-0.2 0.8 0.3 0.9 0.6 1.7 0.7 0.8 1 1 1.5 0.1 0.6 0.9 0.8 0.6 1.4 0.2 0.7 0 0.7-0.2 0.9-0.9 1.7-0.2 0.9-0.2 4.4 0.5 2.2 1.2 1.9 1 0.7 3.6 1.1 2 1 1.6 0.3 7.1 0.2 0.8-0.2 0.5-0.3 0.5-0.4 0.6-0.5 0.7-0.3 0.7-0.2 1.6 0.1 0.9-0.2 0.4-0.5 0.3-0.6 0.5-0.5 0.1 0 0.7-0.1 0.7 0.1 1.4 0.6 0.9 0 1.9-0.2 0.9 0.2 0.7 0.6 0.2 0.6 0 0.7 0.1 0.9 0.6 1.1 2.8 3.3 0.9 0.5 2 0.2 1 0.5 0.9 0.6 0.9 0.3 1 0 3.4-0.2 2.3 0.2 2.1 1 3.1 3.3 2 0.7 4.3 0.3 2.8-0.4 1 0.2 1.2 0.6 0.6 0.3 0.4 0.5 0.2 0.5-0.1 1 0.1 0.5 0.4 0.8 1.2 1.4 0.4 0.9 0 0.8-0.4 1.7 0.2 0.9 0.7 1.7 0.8 1.1 1.1 0.4 1.7-0.4 1.2-0.5 0.6 0 0.7 0.3 0.1 0.3 0.1 0.8 0.2 0.3 0.5 0.1 0.5 0 1-0.3 1.9 0.4 0.6 1.4-0.4 3.4 0.2 0.7 0.7 2.3 0.2 1.7 0.4 0.5 2.2 0.8 3.2 1.7 5.7 1.1 1.8 1 1.3 1.5 0.3 2.1-0.3 0.6-0.5 0.6-0.2 0.6 0.7 0.4 1 0.4 0.2 0.2-0.2 0.4-0.7 1.3-0.3 0.4-0.1 0.3 0.6 1.1 0.1 0.4 0.1 0.9 0.2 0.7 0.4 0.2 0.4-0.1 0.8 0.2 0.4-0.1 0.3 0.1 0.5 0.2 0.2 0.4 0.4 1.1 0.2 0.4 0.8 0.4 1 0.4 1 0.1 0.8-0.1 0.9-0.2 0.5 0.2 0.4 0.3 0.9 0.1 0.7-0.3 0.5-1.5 0.8-0.3 0.8 0.3 0.3 0.8 0 0.8 0.4 0.6 0.8 0 1.8-0.7 1.1 0.2 1.8 0.9 0.5 0.4 0.3 0.5 0.1 0.4 0 0.4 0.5 1.5 0.2 0.4 0.4 0.5 0.6 0.3 0.4-0.1 0.4-0.2 0.5-0.1 0.5 0.1 0.3-0.1 0.3 0 0.5 0.3 0.2 0.3 0.2 1 0.3 0.3 0.9 0.1 0.9-0.4 0.9-0.3 0.9 0.5 2.7 2.1 1.7 1.9 1.1 0.8 2.4 1 3.9 1.1 0 0.1-27.8 8.6-0.1-0.5-0.1-0.6-0.3-0.2-0.6 0-0.3-0.1-0.5-0.7-0.6-0.8-0.6-0.5-3.1-1.8-1.3-1.1-2.2-2.2-1.4-2.4-0.5-0.4-0.5 0.1-0.4 0.2-0.4 0.3-0.2 0.1-0.7 0-0.3-0.2-0.2-0.3-0.2-0.2-0.4-0.3-0.2-0.2-0.3-0.2-1.3-0.1-1-0.2-0.5-0.1-0.9-0.3 0.4-0.7 1.4-1-1.7-3.6-0.7-1-1.1-0.9-0.6 0.1-1.3 2.1-0.5 0.4-0.5 0-0.9-0.3-1.7-0.3-1.1-0.5-0.7-0.5-2-2.3-0.4-0.2-0.4-0.2-0.9 0-0.5-0.1-0.5-0.6-2-2.7-1-0.8-1.1-0.5-2.2-0.7-1.1-0.1-0.7 0.2-0.5 0.5-0.2 1-0.3 0.6-0.6 0.8-0.8 0.6-0.7 0.3-1-0.6-3.2-1.2-2.8-0.5-1-0.7-1.2-0.4-3-1.8-2.4-2.2-0.9-0.3-0.5-0.3-0.6-0.7-0.8-0.7-1-0.4-1 0.1-2.2 0.5-1.1 0.2-1.2-0.1-1-0.3-0.8-0.3-1.4-0.8-2-1.5-0.5-0.7-3-1.9-1.3-1.2-0.6-0.8-0.2-1-0.2-0.6-3.4-4.3-0.3-0.6-0.4-0.8-1.2 0.2-1.3 0.4-0.9 0-0.3-0.4-0.2-1.3-0.3-0.5-0.5-0.2-0.5-0.1-1.1 0.1-1.3-0.1-1.1-0.2-1-0.5-1-0.6-1.4-1.5-0.5-0.2-0.5 0.1-0.9 0.7-0.3 0.2-0.3 0.2-1.2 1.5-0.5 0.2-0.6 0.1-1.1 0.1-0.4-0.1 0 0.3-0.1 3.8 0.5 3.4-0.9 0.6-5 0.5-1.3 0.7-0.8 0.1-0.9-0.3-1.4-1.3-0.8-0.5-0.7-0.2-2.5-0.3-1.7-0.5-0.7 0.2 0.2 2.1-0.8 0-1.8-0.8-0.7-0.1-3.5 0.5-0.7 0-0.8-0.3-0.8-0.6-1.1-1.1-0.6-0.4-0.8-0.3-0.6-0.1-2 0-1.6-0.5-1.9-2.2-1.1-0.3z"
                        id="COPUT"
                        onClick={() => handleDepartmentClick('COPUT')}
                        className={`cursor-pointer transition-colors duration-200 ${selectedDepartment === 'Putumayo' ? 'fill-primary' : 'hover:fill-primary/70'}`}
                      />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Putumayo</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Add more departments here */}
                </g>
              </svg>
            </TooltipProvider>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Ubica el departamento: {targetDepartment}</h3>
            <p className="mb-4">Departamento seleccionado: {selectedDepartment || "Ninguno"}</p>
            <Button
              onClick={handleSubmit}
              disabled={!selectedDepartment || showResult}
              className="mb-4"
            >
              Verificar
            </Button>
            {showResult && (
              <div className={`p-4 rounded-md mb-4 ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                {isCorrect ? "¡Correcto!" : `Incorrecto. El departamento correcto es ${targetDepartment}.`}
              </div>
            )}
          </div>
        </div>
        <Button
          onClick={handleNextDepartment}
          variant="secondary"
          className="mr-4"
        >
          Siguiente Departamento
        </Button>
        <Button
          onClick={onClose}
          variant="destructive"
        >
          Cerrar Mapa
        </Button>
      </CardContent>
    </Card>
  )
}