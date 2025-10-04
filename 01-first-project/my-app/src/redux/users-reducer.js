import {followUsers, getUsers, unfollowUsers} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const IS_TOGGLE_FETCHING = 'IS_TOGGLE_FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],

}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
    case UNFOLLOW: {
      const isFollow = action.type === FOLLOW // false or true
      return {
        ...state,
        users: state.users.map(u =>
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
    case FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId] //[123]
          : state.followingInProgress.filter(id => id !== action.userId)
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
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const isToggleFetching = (isFetching) => ({type: IS_TOGGLE_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId})

export default usersReducer;


export const getUsersThunkCreator = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(isToggleFetching(true))

    getUsers(currentPage, pageSize).then(data => {
      dispatch(isToggleFetching(false))
      dispatch(setUsers(data.items))

      const limit = Math.min(data.totalCount, 20)
      dispatch(setUsersTotalCount(limit))
    })
  }
}

export const onPageChangeThunkCreator = (p, pageSize) => {
  return (dispatch) => {
    dispatch(isToggleFetching(true))
    dispatch(setUsers([]))
    dispatch(setCurrentPage(p))
    getUsers(p, pageSize).then(data => {
      dispatch(isToggleFetching(false))
      dispatch(setUsers(data.items))
    })
  }
}

export const followUserThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    followUsers(userId).then(res => {
      if(res.resultCode === 0){
        dispatch(follow(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    })
  }
}

export const unfollowUserThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    unfollowUsers(userId).then(res => {
      if(res.resultCode === 0){
        dispatch(unfollow(userId))
      }
      dispatch(toggleFollowingProgress(false, userId))
    })
  }
}





