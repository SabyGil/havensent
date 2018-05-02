import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Request from './components/Request';
import Footer from './components/Footer';
import AdminView from './components/AdminView';
import GraphView from './components/GraphView';
import GraphViewByDemographic from './components/GraphViewByDemographic';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/request' component={Request}/>
          <Route exact path='/adminView' component={AdminView}/>
          <Route exact path='/graphView' component={GraphView}/>
          <Route exact path='/demographicView' component={GraphViewByDemographic}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
