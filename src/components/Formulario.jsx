import { useState, useEffect } from 'react';
import Error from './Error';

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {//paso la funcion desde el app.jsx que es el padre
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);
    
    useEffect(()=>{
        if(Object.keys(paciente).length > 0){//forma de comprobar si un objeto tiene algo
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
    },[paciente])

    const generarId = ()=>{
            const random = Math.random().toString(36).substr(2);
            const fecha = Date.now().toString(36)
                       

        return random + fecha;
        
    }



    const handleSubmit = (e) => {
        e.preventDefault();//para no enviar el formulario antes de hacer varias cosas

        //validacion del fomrulario
        if ([nombre, propietario, email, alta, sintomas].includes('')) {//verifica que nsinguno este vacio
            //las cosnstantes de arriba se generan como arreglo para poder usar .includes 
            //console.log("Ningun campo puede estar vacio");

            setError(true);
            return;
            
        }
        setError(false);

        //construir un objeto de paciente
        const objetoPaciente = { //objeto en memoria de lo que leemos desde el formulario
            nombre,
            propietario,
            email,
            alta,
            sintomas,
            
        } 

        if(paciente.id){// si existe en el objeto de paciente un id edito sino lo estoy creando
            //editando
            objetoPaciente.id = paciente.id //el id que ya tengo en el registro previo se lo asigno al objeto paciente
            const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacienteActualizado)
            setPaciente({})

        }else{
            //nuevo registro
            objetoPaciente.id = generarId() //estoy generando el id de paciente para luego pasarlo en setPacientes([...pacientes, objetoPaciente]);
            setPacientes([...pacientes, objetoPaciente]);/* tomar una copia del arreglo para agregar un nuevo elemento al arreglo*/
        }
        
        

        //reiniciar form
        setNombre('')
        setPropietario('')
        setEmail('')
        setAlta('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimineto Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""}
                <span className="text-indigo-600 font-bold">Adminstralos</span>
            </p>
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-md mb-10 py-10 px-5">

                {error &&                   
                    <Error> 
                        <p>Todos los campos son obligatorios!</p>
                    </Error>}
                                {
                    /*esta es una forma de reescribir el if ternario error ? 'Si hay error : 'No hay error' 
                    dependiendo como venga seteado el setError
                    Este es un segundo cambio donde en vez de hacer error && 'Si hay error' lo cambiamos por codigo html*/
                }
                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="block text-gray-700 uppercase font-bold" >
                        Nombre Mascota
                    </label>
                    <input
                        type="text"
                        id="mascota"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="block text-gray-700 uppercase font-bold" >
                        Nombre Propietario
                    </label>
                    <input
                        type="text"
                        id="propietario"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 uppercase font-bold" >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="alta"
                        className="block text-gray-700 uppercase font-bold" >
                        Alta
                    </label>
                    <input
                        type="date"
                        id="alta"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={alta}
                        onChange={(e) => setAlta(e.target.value)} />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="block text-gray-700 uppercase font-bold" >
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                    <input
                        type="submit"
                        className="bg-indigo-600 p-3 w-full mt-4 text-white uppercase font-bold
                         hover:bg-indigo-700 cursor-pointer transition-all"
                        value={ paciente.id ? 'Editar Paciente': 'Agregar Paciente' }//si existe pqaciente se edita o no
                        />
                </div>
            </form>
        </div>


    )
}

export default Formulario;