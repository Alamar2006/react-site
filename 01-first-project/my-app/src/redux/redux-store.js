import { combineReducers, legacy_createStore as createStore} from 'redux'
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

export const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
})
// геттер и паттерн сидят внутри по дефолту

let store = createStore(reducers)

export default store;
