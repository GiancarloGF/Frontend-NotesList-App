import React, { useState,useImperativeHandle } from 'react';
import PropTypes from 'prop-types'//Para definir los props obligatorios y el tipo de dato que recibira.

/* todo lo que este dentro de este componente se puede ocultar o mostrar segun un boton.
forwardReft hace que este componente pueda acceder a la referencia que se le pasa por parametro ref y pasarselo a otro componente */
const Togglable = React.forwardRef((props,ref) => {

  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  //Este hook hace que toggleVisibility este disponible fuera de este componente, por lo que un componente padre o superior puede usar esta funcion desde afuera.
  useImperativeHandle(ref,() => {
    return {toggleVisibility}
  })

  return (
    <div>
      {/* Button to log in and display login form*/}
      <div style={hideWhenVisible} className="togglableContent">
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>

      {/* Login form and cancel button */}
      <div style={showWhenVisible}>
        {/*Each component or element that are inside of Togglabe are childrens */}
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>

    </div>
  )
})

Togglable.propTypes={
  buttonLabel:PropTypes.string.isRequired
}

export default Togglable;