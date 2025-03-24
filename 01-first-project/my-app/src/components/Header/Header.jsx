import React from "react";
import styles from './Header.module.css';


// let c1 = 'item'
// let c2 = 'active'
// let classes = c1 + '' + c2;
// let classesNew = `${styles.item} ${c2}`


const Header = () => {
    return (
        <header className={styles.header} >
        <img src="https://static.vecteezy.com/system/resources/thumbnails/012/986/755/small_2x/abstract-circle-logo-icon-free-png.png" alt="#" />
      </header>
    )
}

// {`${header} ${example}`} ну как бы да

export default Header;

// {`${sail} ${nn}`}