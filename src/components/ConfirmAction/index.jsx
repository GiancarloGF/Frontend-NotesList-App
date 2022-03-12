import React from 'react'
import Styles from './styles.module.css'
import Button from '../Button'
import { useSelector } from "react-redux";

export default function ConfirmAction({text, handleCancel, handleConfirm}) {
    const color_theme = useSelector((state) => state.colorTheme);
    return (
        <div className={`${Styles.container} ${Styles[color_theme]}`} >
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
