import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Request from './components/Request';
import Footer from './components/Footer';
import AdminView from './components/AdminView';
import GraphView from './components/GraphView';
import GraphViewByDemographic from './components/GraphViewByDemographic';
import EditProfile from './components/EditProfile';
import NewPassword from './components/NewPassword';
import ServiceProviders from './components/ServiceProviders';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="app">
          <Header />
          <Route />
          <Route exact path='/'  component={LandingPage}/>
          <Route exact path='/request' component={Request}/>
          <Route exact path='/adminView' component={AdminView}/>
          <Route exact path='/graphView' component={GraphView}/>
          <Route exact path='/demographicView' component={GraphViewByDemographic}/>
          <Route exact path="/forgetpassword/:token" component={NewPassword} />
          <Route exact path='/editProfile' component={EditProfile}/>
          <Route exact path='/serviceProviders/:type' component={ServiceProviders}/> 
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
