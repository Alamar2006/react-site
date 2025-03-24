import React from "react";
import styles from '../Dialogs.module.css';
import { NavLink } from "react-router-dom";

// РЕФАКТОРИНГ ПУТИ ЧЕРЕЗ ПЕРЕМЕННУЮ

const DialogsItems = (props) => {

    let path = `/dialogs/${props.id}`;

    return (
        <div className={styles.dialog + '' + styles.active} >
            <NavLink to={path} className={styles.dialog} >{props.name}</NavLink>
        </div>
    )
}

export default DialogsItems;



