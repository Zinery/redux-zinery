import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="component-Navbar">
        <span >
          <h6>What's YOUR zine?</h6>
          <h4>Guest</h4>
        </span>
        <div className="icon-bar btn right navBurger">
          <i className="fas fa-bars" />
        </div>
        <div className="navLogo left" />
      </div>
    );
  }
}

export default Navbar;
