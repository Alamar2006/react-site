import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersProfile} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";

function withParams(Component) {
  return function ComponentWithParams(props) {
    const params = useParams();
    return <Component {...props} params={params} />;
  };
}
// HOC свой

class ProfileContainer extends React.Component{


  componentDidMount(){
    let userId = this.props.params.userId;
    if (!userId || userId === '') {
      userId = 2; // ID по дефолту
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(res => {
      this.props.setUsersProfile(res.data);
    })
  }

  render(){
    return (
      <Profile {...this.props} />
    )

  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}



export default withParams(connect(mapStateToProps, {setUsersProfile})(ProfileContainer))
