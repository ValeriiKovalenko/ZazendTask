import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.navigation}>
        <NavLink className={styles.link} exact to="/">
          Main
        </NavLink>

        <NavLink className={styles.link} to="/about">
          About
        </NavLink>
        <NavLink className={styles.link} to="/contact">
          Contact us
        </NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
