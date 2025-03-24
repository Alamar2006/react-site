import React from "react";
import styles from '../Dialogs.module.css';

const Message = (props) => {


    return (
        <div>
            <div className={styles.message}>{props.messageName}</div>
        </div>
    )
}

export default Message;