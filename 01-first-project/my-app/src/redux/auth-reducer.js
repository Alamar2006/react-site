
const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuthenticated: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.data,
        isAuthenticated: true
      }
      default: {
        return {
          ...state,
        }
      }
  }
}



export const setUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})


export default authReducer;