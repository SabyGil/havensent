import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Request from './components/Request';
import Footer from './components/Footer';
import RequestScript from './components/RequestScript';
import AdminView from './components/AdminView';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/request' component={Request}/>
          <Route exact path='/requestscript' component={RequestScript}/>
          <Route exact path='/adminView' component={AdminView}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
