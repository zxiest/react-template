// var React = require('react');
// var ReactDOM = require('react-dom');
// var App = require('./js/app.js.jsx');
//
// ReactDOM.render(<App />, document.getElementById('main'));

import React from 'react'
import { render } from 'react-dom'

import App from './js/app'
import Home from './js/home'
import About from './js/about'

import { Router, Route, hashHistory, IndexRoute } from 'react-router'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/" component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('main'))
