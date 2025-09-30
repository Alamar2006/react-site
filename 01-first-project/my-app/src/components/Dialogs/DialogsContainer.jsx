import { sendMessage, updateNewMessageBody } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => { 
    // мапим стейт на пропсы
    return {
        dialogsPage: state.dialogsPage
    }
}
// данные из state
const DialogsContainer = connect(mapStateToProps, {updateNewMessageBody,sendMessage})(Dialogs)


export default DialogsContainer;


//создание контейнерной компаненты, внутри рендерит ее и передает пропсы
// забываем про store