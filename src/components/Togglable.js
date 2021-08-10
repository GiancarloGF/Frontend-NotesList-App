import React, { useState } from 'react'

// This component show information about form's login or button to display the form's login.
const Togglable = (props) => {

  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      {/* Button to log in and display login form*/}
      <div style={hideWhenVisible}>
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
}

export default Togglable;