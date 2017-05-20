import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Cards from '../Cards/Cards';
import Contact from '../Contact/Contact';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cards" component={Cards} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  )
}

export default Main;
