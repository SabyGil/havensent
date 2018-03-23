import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  render(){
    return (
      <div className='header-background'>
        <header className='fixed-width'>
          <div className="logo-container">
            <NavLink exact to="/"><img src={ require("../styles/images/logo.png") } alt="" /></NavLink>
          </div>

          <nav>
            <ul>
              <NavLink exact to="/adminView">
                <li className='login-btn'>LOG INTO AN ORGANIZATION</li>
              </NavLink>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
