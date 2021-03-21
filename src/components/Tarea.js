import React, { useState } from 'react';
import './Tarea.css';

const Tarea = ({tarea, borrarElementoDelArray, modificarElementoDelArray, index}) => {
    const [completada, setCompletada] = useState(false)

    const handleClick = () => {
        setCompletada(true)
    }

    const handleClickBorrar = () => {
        borrarElementoDelArray(tarea)
    }

    const handleClickModificar = () => {
        modificarElementoDelArray(index)
    }

    return (
    <>
      <li className={completada ?"completada" :""}>{tarea}</li>
      <button onClick={handleClick}>Completar Tarea</button>
      <button onClick={handleClickBorrar}>Borrar tarea</button>
      <button onClick={handleClickModificar}>Modificar tarea</button>
      </>
    )
}

export default Tarea