import React from 'react'
import Button from '../../Button';
import Styles from './styles.module.css';

function SignupForm() {
    return (
        <div className="container__form container--signup">
          <form action="#" className="form" id="form2">
            <h2 className="form__title">Registro</h2>
            <input type="email" placeholder="Correo"/>
            <input type="password" placeholder="Contraseña"/>
            <a href="#" className={Styles.link}>
              ¿Olvidaste tu contraseña?{" "}
            </a>
            <Button variant="primary" text="Registrarme" />
          </form>
        </div>
    )
}

export default SignupForm;
