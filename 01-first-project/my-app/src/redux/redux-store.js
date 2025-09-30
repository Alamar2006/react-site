import { combineReducers, legacy_createStore as createStore} from 'redux'
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from "./auth-reducer";

export const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
})
// геттер и паттерн сидят внутри по дефолту

let store = createStore(reducers)

export default store;
