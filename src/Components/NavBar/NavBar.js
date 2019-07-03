import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './img/logo.png';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <header className={styles.header}>
      <img src={logo} width="100" height="100" alt="logoImage" />
      <nav>
        <NavLink exact to="/">
          Main
        </NavLink>

        <NavLink to="/About">About</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
      </nav>
    </header>
  );
}

NavBar.propTypes = {};

export default NavBar;
