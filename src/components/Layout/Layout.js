import React, { Component } from 'react';
// import Question from '../View/Body/Question/Question/Question';
import {
  Navbar,
  Hero,
  Body,
  Footer
} from '../View/index';


class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Layout;
