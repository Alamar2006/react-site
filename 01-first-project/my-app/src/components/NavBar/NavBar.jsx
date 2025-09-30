import React from "react";
import styles from "./NavBar.module.css"
import { NavLink } from "react-router-dom";


const NavBar = (props) => {

let func = ({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'});

    return (
    <nav className={styles.nav} >
      <div>
        <NavLink to="/profile" style={func} >Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" style={func} >Message</NavLink>
      </div>
      <div>
        <NavLink to="/news" style={func} >News</NavLink>
      </div>
      <div>
        <NavLink to="/music" style={func} >Music</NavLink>
      </div>
        <div>
          <NavLink to="/settings" style={func} >Settings</NavLink>
        </div>
        <div>
          <NavLink to="/users" style={func} >Users</NavLink>
        </div>
    </nav>
    )
} 

export default NavBar;

// {({isActive}) => isActive ? 'activeLink' : ''}  не робит с styles