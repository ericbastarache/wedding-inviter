import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render () {
    return (
      <section className="home-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content-holder">
                <h3 className="text-center">Simple Invite</h3>
                <p className="text-center">Using this simple inviter you'll never have to worry about lost invitations again. And it's super easy to know when your invititation has received a reply.</p>
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="text-left left-pad">Get notified when we launch</h3>
                  </div>
                  <div className="col-md-6">
                    <form className="form-inline">
                      <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="text" className="form-control" placeholder="Email Address" />
                      </div>
                      <button className="btn btn-default">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
