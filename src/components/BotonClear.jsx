import React from 'react';
import '../style/BotonClear.css'

const BotonClear = (props) => {
  return (
    <div onClick={props.manejarClear} className='boton-clear'>
      {props.children}
    </div>
  )
}

export default BotonClear