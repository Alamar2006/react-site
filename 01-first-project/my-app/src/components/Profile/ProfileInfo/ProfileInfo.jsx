import React from "react";
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://t4.ftcdn.net/jpg/01/62/45/65/360_F_162456542_VvkZgI8iVm2zOqj6U8tz87ZrIeGQgnT1.jpg" alt="#" />
      </div>
      <div className={styles.desc} >
        ava + desc
      </div>
    </div>
  )
}

export default ProfileInfo;