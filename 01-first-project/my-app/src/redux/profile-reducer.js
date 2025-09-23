const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
            {id: 1, message: 'Hi, Mirosval, goyda?', likesCount: 12},
            {id: 2, message: 'i have done with it', likesCount: 20},
            {id: 3, message: '5 days, man', likesCount: 10},
            {id: 4, message: 'samurai', likesCount: 0}
        ],
        newPostText: 'REACT + REDUX + TAILWIND + CSS + JS + ESLINT'
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST}); // ретурн
export const updateNewPostCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;

