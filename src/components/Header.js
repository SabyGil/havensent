import React from 'react';

export default class Header extends React.Component {
  render(){
    return (
      <div className='container'>
      <header>
        <div className='left-menu'>
          <div className='logo'>
            LOGO
            <img src='../../public/logo.png' alt='' height='50px' />
          </div>
        </div>

        <div className='right-menu'>
            <div className='user-img'>img</div>
            <div className='user-dropdown'>my account
              <i className={`fas fa-chevron-down`}></i>
            </div>
            <div className='post-btn'>post to classifieds</div>
          </div>
        </header>
      </div>
    );
  }
}
