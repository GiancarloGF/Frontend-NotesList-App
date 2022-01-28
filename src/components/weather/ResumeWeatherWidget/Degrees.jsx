import React from 'react'
import Styles from "./styles.module.css";
export default function Degrees({degrees}) {
    console.log(degrees)
    return (
        <div className={Styles.degrees}>
            <span>{Math.floor(degrees)+"°"}</span>
        </div>
    )
}
