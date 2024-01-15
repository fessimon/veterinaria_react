
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, alta, sintomas, id } = paciente;

    const handleEliminar = ()=>{
        const respuesta = confirm("Desea eliminar a la mascota ")

        if(respuesta){
            eliminarPaciente(id)
            
        }
    }

    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre {''}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario {''}
                <span className='font-normal normal-case'>{propietario}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email {''}
                <span className='font-normal normal-case'>{email}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha Alta {''}
                <span className='font-normal normal-case'>{alta}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas {''}
                <span className='font-normal normal-case'>{sintomas}</span>
            </p>
            <p className='font-bold mb-3 text-gray-700 uppercase'>ID {''}
                <span className='font-normal normal-case'>{id}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button
                    onClick={() => setPaciente(paciente)}/* recibo desde listado de pacientes setPaciente para que cuando se haga click en el boton editar se 
                    lleve todo el paciente el objeto paciente */
                    /* MUY IMPORTANTE ES ENTEDER PORQUE HACE LA ARROW FUNCTION LO QUE HACE ES LLAMAR A LA FUNCION SETPACIENTE SI DE DECLARARA
                    ASI-> setPAciente(paciente) estoy ejecuntado la funcion y yo necesito del click en el btn editar */
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg">
                    Editar
                </button>
                <button
                    onClick={handleEliminar}
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg">
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente