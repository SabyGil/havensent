import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
  render(){
    return (
      <div className='header-background'>
        <header className='fixed-width'>
          <div className="logo-container">
            <NavLink exact to="/"><img src={ require("./images/logo.png") } alt="" /></NavLink>
          </div>

          <nav>
            <ul>
              <li className='login-btn'>
                <NavLink exact to="/adminView">LOG INTO AN ORGANIZATION</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}
