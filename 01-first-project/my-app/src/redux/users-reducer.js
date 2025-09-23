const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Anderew', status: 'i am like a boss', location: {city: 'Moscow', country: 'Russia'}},
        {id: 2, followed: true, fullName: 'Chik', status: 'No more happines', location: {city: 'Los An', country: 'US'}},
        {id: 3, followed: false, fullName: 'Kimc hinin', status: 'Bomb ruski', location: {city: 'Kim chin', country: 'Noth Korea'}}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
        case UNFOLLOW: {
            const isFollow = action.type === FOLLOW // false or true
            return {
                ...state,
                users: state.users.map( u => 
                    u.id === action.userId ? {...u, followed: isFollow} : u
                )

            };
    }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
    }
        default:
            return state;
    }
}



export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS})

export default profileReducer;

