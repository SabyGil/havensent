import React from 'react';

export default class Header extends React.Component {
  render(){
    return (
      <header >
        <div className='fixed-width container'>

          <div className="logo-container">
              LOGO
              {/* <img src="logo.png" alt="" /> */}
          </div>

              <nav>
                <ul>
                  <li className='login-btn'>
                    <a href="#" >LOG INTO AN ORGANIZATION</a>
                  </li>
                  {/* <li>
                    <a href="#">link 2</a>
                  </li> */}
                </ul>
              </nav>

        </div>
      </header>
    );
  }
}
