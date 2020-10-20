import React, { useState, useEffect } from 'react';
// Importar el componente personalizado
import Formulario from './Components/Formulario';
import Cita from './Components/Cita';
function App() {
  // Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }
  // Array de todas las citas creadas
  const [ citas, setCitas] = useState(citasIniciales);
  // use useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citasIniciales] );
  // Función que elimina una cita
  const deleteCita = (id) => {
    // console.log(id);
    const nuevasCitas = citas.filter(cita => cita.id !== id );
    setCitas(nuevasCitas);
  }
  // Función que añade nuevas citas al array
  const addNewCita = (cita) => {
    // console.log('ADD_NEW_CITA');
    // console.log(cita);
    setCitas([
      ...citas,
      cita
    ]);
    // console.log(citas);
  }
  // Mensaje de citas condicionales
  const titulo = citas.length === 0 ? 'no hay mascotas' : 'mascotas registradas';
  return (
    <div className="App">
      <h1>veterinaria</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario addNewCita={addNewCita}/>
          </div> 
          <div className="one-half column">
          <h2>{titulo}</h2>
            {
              citas.map( cita => (
                <Cita 
                  key={cita.id} 
                  cita={cita} 
                  deleteCita = {deleteCita}
                  />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
