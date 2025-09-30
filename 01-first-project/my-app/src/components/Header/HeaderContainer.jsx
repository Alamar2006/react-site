import Header from "./Header";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    }).then(res => {
      if(res.data.resultCode === 0) {
        let {id, email, login} = res.data.data;
        this.props.setUserData(id, email, login)
      }
    })
  }

  render() {
    return (
      <Header  {...this.props} />
    )
  }
}

let mapStateToProps = (state) => ({
  id: state.auth.id,
  email: state.auth.email,
  login: state.auth.login,
  isAuthenticated: state.auth.isAuthenticated,
})


export default connect(mapStateToProps, {setUserData})(HeaderContainer)