
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, Mirosval, goyda?', likesCount: 12},
                {id: 2, message: 'i have done with it', likesCount: 20},
                {id: 3, message: '5 days, man', likesCount: 10},
                {id: 4, message: 'samurai', likesCount: 0}
            ],
            newPostText: 'REACT + REDUX + TAILWIND + CSS + JS + ESLINT'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('hello, observer!')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // {type === ADD POST}
        this._state.profilePage = profileReducer(this._state.profilePage, action); // возвращение измененного подобьекта
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    } // обновление стейта
}


// паттерн observer
// подобьекты - чистые функции SOLID
// переработка text и потом рендер
// https://monsterlessons.com/project/lessons/observer-pattern-v-javascript
// мы возьмем postMesssage, который приходит в параметрах
// state меняем только в state, т.к тупые функции
// Когда пользователь вводит текст в textarea, срабатывает событие onChange, которое вызывает функцию onPostChange.
// Внутри onPostChange мы получаем текущее значение текстового поля с помощью newPostElement.current.value и сохраняем его в переменной text.
// Затем мы вызываем функцию props.updateNewPostText(text), передавая text как аргумент.
// сначало готовится BLL, потом UI
export default store;
window.store = store;