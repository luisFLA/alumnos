import { createContext } from "react";
import { Estudiante } from "../Modelos/Estudiante";

export const estudiantesContext = createContext<{
  estudiantes: Estudiante[];
  setEstudiantes: React.Dispatch<React.SetStateAction<Estudiante[]>>;
}>({
  estudiantes: [],
  setEstudiantes: () => {},
});
