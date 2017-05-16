import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render () {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center">{this.props.footerText}</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
