const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const IS_TOGGLE_FETCHING = 'IS_TOGGLE_FETCHING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,

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
                users: [...action.users]
            }
    }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case IS_TOGGLE_FETCHING: {
          return {
            ...state,
            isFetching: action.isFetching
          }
        }
        default:
            return state;
    }
}



export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const isToggleFetching = (isFetching) => ({type: IS_TOGGLE_FETCHING, isFetching})

export default usersReducer;


