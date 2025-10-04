import React from "react";
import { connect } from "react-redux";
// import not from '../../../../assets/images/not.jpeg'
import {
  follow,
  unfollow,
  setCurrentPage, getUsersThunkCreator, onPageChangeThunkCreator,
  followUserThunkCreator, unfollowUserThunkCreator
} from "../../redux/users-reducer";
import UsersPresent from "./UsersPresent";

class UsersContainer extends React.Component {

  componentDidMount() {
    const { pageSize, currentPage } = this.props;
    this.props.getUsersThunkCreator(pageSize, currentPage);
  }

  onPageChange = (pageNumber) => {
    const { pageSize, onPageChangeThunkCreator } = this.props;
    onPageChangeThunkCreator(pageNumber, pageSize);
  }

  render() {
    return (
      <UsersPresent {...this.props} onPageChange={this.onPageChange} />
    )
  }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
    
}

export default connect(mapStateToProps,{
  follow, unfollow, setCurrentPage,getUsersThunkCreator, onPageChangeThunkCreator, followUserThunkCreator, unfollowUserThunkCreator})(UsersContainer);