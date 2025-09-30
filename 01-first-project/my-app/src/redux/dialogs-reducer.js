const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Pavel'},
        {id: 3, name: 'Sona'},
        {id: 4, name: 'Fill'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Have a nice day'},
        {id: 3, message: 'five days'},
        {id: 4, message: 'son'},
        {id: 5, message: 'stalin'}
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {
                ...state,
                newMessageBody: action.body // stateCopy.newMessageBody = action.body;
            }
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',                                   // stateCopy.newMessageBody = '';
                messages: [...state.messages, {id: 6, message: body}] // stateCopy.messages.push({id: 6, message: body});
            }
        }
        default:
            return state;
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE});
export const updateNewMessageBody = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body}); // тех english

export default dialogsReducer;

// обьект можно не создавать, а сразу return