import React from "react";
import styles from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogsItems from "./DialogItem/DialogsItem";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

let state = props.store.getState().dialogsPage;

let dialogsElements = state.dialogs.map( dialog =>  <DialogsItems name={dialog.name} id={dialog.id}/> );
// метод map для удобной группировки массива
let messagesElements = state.messages.map( message => <Message messageName={message.messageName} /> );
// я хочу получить элементы из messageData 
let newMessageBody = state.newMessageBody;

let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
}

let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body)); // e обрабатывается через функцию, мы обращаемся к e и забираем от туда body и диспатчим action
}

    return (
        <div className={styles.dialogs} >
            <div className={styles.dialogsItems} >
                { dialogsElements }
            </div>
            <div className={styles.messages} >
                <div> {  messagesElements } </div> 
                <div><textarea  value={newMessageBody} onChange={onNewMessageChange} placeholder="Enter your message" ></textarea></div>
                <div><button onClick={onSendMessageClick} >Send </button></div>   
            </div>      
        </div>
    )
}

export default Dialogs;

//  тем меньше мы даем информации, тем лучше