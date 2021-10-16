import React from "react";
import style from "./Hello.module.scss"

const Hello = props => {
    const {name, surname} = props
    return <div className={style.wrapper_hello}>Hello, {name} {surname}</div>
}

export default Hello;