import React from 'react'
import Styles from './styles.module.css'
import Button from '../Button'

export default function ConfirmAction({text, handleCancel, handleConfirm}) {

    return (
        <div className={Styles.container}>
            <span className={Styles.text}>
                {text}
            </span>
            <div className={Styles.buttons}>
                <Button text="Si" variant="primary" handleClick={handleConfirm}/>
                <Button text = "No" variant="primary--outlined" handleClick={handleCancel}/>
            </div>
        </div>
    )
}
