import React from "react";
import styles from './ProfileInfo.module.css';
import preloader from '../../../img/Spinner@1x-0.3s-88px-88px.svg'

const ProfileInfo = (props) => {
  return (
    <div>
      <div>

        <img src="https://t4.ftcdn.net/jpg/01/62/45/65/360_F_162456542_VvkZgI8iVm2zOqj6U8tz87ZrIeGQgnT1.jpg" alt="#" />
        {props.profile ? (
          <>
            <img src={props.profile.photos?.large} alt="Avatar" />
            <h2>{props.profile.fullName}</h2>
            <p>{props.profile.aboutMe}</p>
          </>
        ) : (
          <img src={preloader} alt="preloader" />
        )}
      </div>
    </div>
  )
}

export default ProfileInfo;