import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

/***
* Import all page components here
*/
import AboutUs from './components/aboutus'
import Home from './components/home'
import Register from './components/register'
import Contact from './components/contact'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={AboutUs} />\
        <Route path="/register" component={Register} />\
        <Route path="/contact" component={Contact} />\
      </Switch>
    );
  }
}

export default Routes;
