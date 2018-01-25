import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <footer className="wrapper style1 align-center">
        <div className="inner">
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/jonjaffe1/" className="icon style2 fa-linkedin"><span className="label">LinkedIn</span></a></li>
          </ul>
          <p>Jon Jaffe</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
