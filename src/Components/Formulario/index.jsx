import React, { Fragment, useState } from 'react';
import PropType from 'prop-types';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
// importamos el generador de id
import { uuid } from 'uuidv4';
//  Component Functional
const Formulario = ({addNewCita }) => {
    // crear state de citas
    const [cita, setCita] = useState({
        id: '',
        mascota: '',
        typemascot: '',
        edad : '',
        sexo : '',
        servicio: ''
    });


    // creamos state para validar
    const [error, setError ] = useState(false);
    // Función que se ejecuta cuando cada usuario escribe en el input
    const addTextForm = (e) => {
        // console.log('ADD_TEXT_CITA');
        // console.log(e.target.name);
        // console.log(e.target.value);
        setCita({
            ...cita,
            [e.target.name] : e.target.value
        });
    }
    // Añadimo la cita cuando seleccionamos añadir
    const addCita = (e) => {
        // console.log('ADD_CITA');
        e.preventDefault();
        // Validar datos
        if( mascota.trim() === '' ||
            typemascot.trim() === '' ||
            edad.trim() === '' || 
            sexo.trim() === '' ||
            servicio.trim() === ''
        ){
            // console.log('hay un error');
            setError(true);
            return;
        }
        // eliminar el mensaje
        setError(false);
        // Asignar un id
        cita.id = uuid();
        // Crear la cita utilizamos la función que viene por el props del componente padre
        addNewCita(cita);
        // Reiniciar el form
        setCita({
            id: '',
            mascota: '',
            typemascot: '',
            edad : '',
            sexo : '',
            servicio: ''
        });
    }
    // Extraer los valores del useState
    const { mascota, typemascot, edad, sexo, servicio } = cita;
    return (
        <Fragment>
            <h2> registro de mascotas</h2>
            {
                error ?
                <p className="alerta-error"> Todos los campos son obligatorios </p>
                : null
            }
            <form
                onSubmit={ addCita }
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"

                    placeholder="Nombre de mascota"
                    onChange={ addTextForm }
                    value = {mascota}
                />
                <label>tipo de mascota</label>
                <select
                    type="text"
                    name="typemascot"

                    onChange={ addTextForm }
                    value = {typemascot}
                    >
                    <option> tipo de mascota</option>
                    <option value="perro"> perro</option>
                    <option value="gato">gato </option>
                    <option value="hamster"> hamster</option>
                    <option value="ave">ave </option>

                    </select>
                <label>edad</label>
                <input
                    type="text"
                    name="edad"
                    className="u-full-width"
                    placeholder="edad"
                    onChange={ addTextForm }
                    value = {edad}
                />

                <label>sexo</label>
                <select
                    type="text"
                    name="sexo"


                    onChange={ addTextForm }
                    value = {sexo}

                    >
                    <option> sexo</option>
                    <option value="macho"> macho</option>
                    <option value="hembra">hembra </option>
                    </select>
                <label>servicio</label>
                <select

                    type="text"
                    name="servicio"
                    onChange={ addTextForm }
                    value = {servicio}
                >
                    <option> servicio</option>
                    <option value="valoracion"> valoracion</option>
                    <option value="urgencias">urgencias </option>
                    <option value="hospitalizacion"> hospitalizacion</option>

                </select>

                <button
                    type="submit"
                    className="u-full-width button-submit"
                >Agregar mascota</button>
            </form>

        </Fragment>
    );
}
Formulario.prototype = {
    addNewCita: PropType.func.isRequired
}
export default Formulario;