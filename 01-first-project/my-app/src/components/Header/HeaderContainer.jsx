import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {authThunkCreator, setUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.authThunkCreator()
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


export default connect(mapStateToProps, {setUserData, authThunkCreator})(HeaderContainer)