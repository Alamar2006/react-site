const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
        posts: [
            {id: 1, message: 'Hi, Mirosval, goyda?', likesCount: 12},
            {id: 2, message: 'i have done with it', likesCount: 20},
            {id: 3, message: '5 days, man', likesCount: 10},
            {id: 4, message: 'samurai', likesCount: 0}
        ],
        newPostText: 'REACT + REDUX + TAILWIND + CSS + JS + ESLINT',
        profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost], // stateCopy.posts = [...state.posts]
                newPostText: ''                  // stateCopy.newPostText = '';
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            // let stateCopy = {...state}
            // stateCopy.newPostText = action.newText;
            // return stateCopy; 
             return {
                ...state,
                newPostText: action.newText
            } 
        }
        case SET_USERS_PROFILE: {
          return {
            ...state,
            profile: action.profile
          }
        }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST}); // ретурн
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});

export default profileReducer;

