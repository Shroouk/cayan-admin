import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <>
      <header className='sec-hero'>
            <div className="sec-overlay">
            <h1>CAYAN</h1>
            <h3>Oil Company Limited</h3>
            <div className='sec-typing-txt'>
            </div>
            <br/>
            <button className='sec-read-btn'>{this.props.page}</button>
                </div>
            </header>

            <svg className="curveUpColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
            </svg>
      </>
    )
  }
}

export default Header;