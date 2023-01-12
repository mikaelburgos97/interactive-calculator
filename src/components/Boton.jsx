import React from 'react'
import '../style/Boton.css'

function Boton (props){
  const esOperador = valor =>{
    // eslint-disable-next-line eqeqeq
    return isNaN(valor) && (valor != '.') && (valor != '='); 
  }
  return (
    <div
      onClick={() => props.manejarClic(props.children)} 
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}` }>
      {props.children}
    </div> 
  )
}

export default Boton;