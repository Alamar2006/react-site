import React from "react";
import { connect } from "react-redux";
import axios from "axios";
// import not from '../../../../assets/images/not.jpeg'
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setUsersTotalCount,
  isToggleFetching
} from "../../redux/users-reducer";
import UsersPresent from "./UsersPresent";

class UsersC extends React.Component {

  componentDidMount() {
    this.props.isToggleFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      withCredentials: true
    }).then(res => {
      this.props.isToggleFetching(false)

      this.props.setUsers(res.data.items)

      const limit = Math.min(res.data.totalCount, 20)
      this.props.setUsersTotalCount(limit) // ограничение максимум для 20 страниц

    })
  }

  onPageChange = (p) => {
    this.props.isToggleFetching(true)
    this.props.setUsers([])
    this.props.setCurrentPage(p)

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`, {
      withCredentials: true
    }).then(res => {
      this.props.isToggleFetching(false)
      this.props.setUsers(res.data.items)
    })
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
    }
    
}

export default connect(mapStateToProps,{
  follow, unfollow, setUsers,
  setCurrentPage, setUsersTotalCount,
  isToggleFetching})(UsersC)