import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render () {
    return (
      <div>
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
                      <button className="btn btn-success">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="feature">
                <h1 className="text-center">Convenient <i className="fa fa-envelope"></i></h1>
                <p>Create an account for your wedding day and populate your guest list. When your list is complete, simply hit the send button to send the invitations.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature">
                <h1 className="text-center">Fast <i className="fa fa-bolt"></i></h1>
                <p>Sending wedding invitations has never been so easy. With the whole process taking about 5 minutes, spend less time worrying about your invitations going out and more time planning your perfect day.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature">
                <h1 className="text-center">Dazzling <i className="fa fa-star"></i></h1>
                <p>Choose from one of our ready made designs, or customize your invitation. If you're feeling really fancy, why not do both!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Home;
