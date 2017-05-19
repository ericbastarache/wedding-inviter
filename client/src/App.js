import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header headerText="Wedding Inviter"/>
          <Main />
          <Footer footerText="Copyright Eric Bastarache 2017" />
        </div>
      </Router>
    );
  }
}

export default App;
