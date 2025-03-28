import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => { 
    // мапим стейт на пропсы
    return {
        dialogsPage: state.dialogsPage
    }
}
// данные из state
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) 


export default DialogsContainer;


//создание контейнерной компаненты, внутри рендерит ее и передает пропсы
// забываем про store