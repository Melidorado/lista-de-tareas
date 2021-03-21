import React, {useState} from 'react';
import './App.css';
import Tarea from './components/Tarea';

const App = () => {
  const [valorDelInput, setValorDelInput] = useState("")
  const [lista, setLista] = useState([
    'Lavar ropa',
    'Corregir TPS',
    'Desarmar cajas',
    'Cepillar gatos',
    'Insultar a Pepo',
    'Putear a d1sn3y mientras mando CVs a otras empresas',
  ])

  const handleClick = () => {
    setLista([...lista, valorDelInput])
    setValorDelInput("")
  }

  const handleChange = (e) => {
    setValorDelInput(e.target.value)
  }

  const borrarElementoDelArray = (param) => {
    const listaNueva = lista.filter(tarea => tarea !== param)
    setLista(listaNueva)
  }

  const [tareaEditada, setTareaEditada] = useState(false)

  const [valorDelInputModificado, setValorDelInputModificado] = useState("")

  const handleChangeModificado = (e) => {
    setValorDelInputModificado(e.target.value)
  }
  const [index , setIndex] = useState("")

  const modificarElementoDelArray = (index) => {
    setIndex(index)
    setTareaEditada(true)
  }

  const handleClickModificado = () => {
    /* const listaEditada = [...lista] */
    lista.splice(index, 1, valorDelInputModificado)
    setLista(lista)
    setTareaEditada(false)
  }


  return (
    <div>
    <ul>
      {lista.map( (tarea, i) => 
      <Tarea 
      tarea={tarea} 
      key={i} 
      borrarElementoDelArray={borrarElementoDelArray}
      modificarElementoDelArray={modificarElementoDelArray}
      index= {i}/>
      )}
    </ul>

    <label> Agregar tarea...
      <input 
      value={valorDelInput} 
      onChange={handleChange}
      type="text" 
      placeholder="tarea nueva..."></input>
    </label>
    <button onClick={handleClick}>Agregar Tarea</button>

    {tareaEditada &&
    <>
    <label> Modificar tarea...
    <input 
    value={valorDelInputModificado} 
    onChange={handleChangeModificado}
    type="text" 
    placeholder="modifica la tarea..."></input>
    </label>
    <button onClick={handleClickModificado}>Modificar Tarea</button>
  </>
    }
    </div>

    
  );
}

export default App;
