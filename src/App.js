import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Main from './Pages/Main/Main';
import About from './Pages/About/About';
import ContactUs from './Pages/ContactUs/ContactUs';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />

        <Route path="/contact" component={ContactUs} />
        <Route path="/" component={Footer} />
      </Router>
    </div>
  );
};

export default App;
