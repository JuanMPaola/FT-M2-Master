import React from "react";
import { Botones } from "./Botones";

const studentName = "Juan M. Paola";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return <div>
    <h1>Hola mu buenas</h1>
    <h3>{studentName}</h3>
    <ul>
      {techSkills.map((techSkills, index)=>(
        <li key={index}>{techSkills}</li>
      ))}
    </ul>
    <Botones/>
  </div>;
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
