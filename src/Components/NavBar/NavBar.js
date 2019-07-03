import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './img/logo.png';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <header className={styles.header}>
      <img src={logo} width="100" height="100" alt="logoImage" />
      <nav className={styles.navigation}>
        <NavLink className={styles.link} exact to="/">
          Main
        </NavLink>

        <NavLink className={styles.link} to="/About">
          About
        </NavLink>
        <NavLink className={styles.link} to="/contact">
          Contact us
        </NavLink>
      </nav>
    </header>
  );
}

NavBar.propTypes = {};

export default NavBar;
