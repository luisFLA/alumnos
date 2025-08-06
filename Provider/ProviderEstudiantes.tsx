import React, { useEffect, useState } from "react";
import { estudiantesContext } from "../Context/ContextEstudiantes";
import { Estudiante } from "../Modelos/Estudiante";

interface Props {
  children: React.ReactNode;
}

export default function ProviderEstudiantes({ children }: Props) {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([
    { id: "1", name: "Juan" },
    { id: "2", name: "María" },
    { id: "3", name: "Carlos" },
    { id: "4", name: "Ana" },
    { id: "5", name: "Luis" },
    { id: "6", name: "Sofía" },
    { id: "7", name: "Pedro" },
    { id: "8", name: "Lucía" },
    { id: "9", name: "Miguel" },
    { id: "10", name: "Laura" },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setEstudiantes((prev) => [
        ...prev,
        { id: "11", name: "Andrea" },
        { id: "12", name: "José" },
      ]);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <estudiantesContext.Provider value={{ estudiantes, setEstudiantes }}>
      {children}
    </estudiantesContext.Provider>
  );
}
