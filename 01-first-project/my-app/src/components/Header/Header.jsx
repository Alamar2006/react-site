import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";


// let c1 = 'item'
// let c2 = 'active'
// let classes = c1 + '' + c2;
// let classesNew = `${styles.item} ${c2}`


const Header = (props) => {
    return (
        <header className={styles.header} >
        <img src="https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small_2x/abstract-circle-logo-icon-free-png.png" alt="#" />

          <div className={styles.loginBlock}>
            {
              props.isAuthenticated ? props.login : <NavLink to={'/login'}>Login</NavLink>
            }

          </div>

      </header>
    )
}

// {`${header} ${example}`} ну как бы да

export default Header;

// {`${sail} ${nn}`}