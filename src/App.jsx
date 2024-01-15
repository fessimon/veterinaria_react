import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPaciente from "./components/ListadoPaciente"
import { useEffect, useState } from "react"

function App() {

  const [pacientes, setPacientes] = useState([]);//valor inicial el mismo tipo de datos que este en el hijo
  const [paciente, setPaciente] = useState({})/* //inicia como objeto vacio, esta vinvculado con el paceintes de arriba que es un array con 
  objetos y esta linea trabaja solo con un objeto por eso las llaves */

  //Local Storage

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = (id) => {
    const apacienteActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(apacienteActualizados)

  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes} //voy a pasar la funcion a la variable setPacientes
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPaciente
          pacientes={pacientes}
          setPaciente={setPaciente}
          paciente={paciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>


    </div>
  )
}

export default App
