import React from 'react';
import PropType from 'prop-types';
//  Component Functional
const Cita = ({cita, deleteCita}) => {
 // Extraer los valores del useState
 const { id, mascota, typemascot, edad, sexo, servicio } = cita; 
    return (
        <div className="cita">
            <p>Mascota: <span>{mascota}</span></p>
            <p>tipo de mascota: <span>{typemascot}</span></p>
            <p>edad: <span>{edad}</span></p>
            <p>sexo: <span>{sexo}</span></p>
            <p>servicio: <span>{servicio}</span></p>

            <button
                className="button eliminar u-full-width"
                onClick={ () => deleteCita(id) }
            >Eliminar</button>
        </div>
    );
} 
Cita.prototype = {
    deleteCita: PropType.func.isRequired,
    cita: PropType.object.isRequired
}
export default Cita;