import React from 'react'
import { Link } from 'react-router'
import NavLink from './navlink'

export default React.createClass({
  getInitialState() {
    return {
    }
  },

  get_active_class(tab_name) {
    if (this.props.location.pathname == tab_name || (typeof tab_name == 'object' && tab_name.indexOf(this.props.location.pathname) >= 0) ) {
      return 'active'
    }
    return ''
  },

  current_page() {
    // https://github.com/reactjs/react-router/pull/157
    return this.props.location.pathname;
  },

  render() {
    return (
      <div>
        <h1>React Router</h1>
        <div className='col-xs-4'>
          <ul role="nav" className='nav nav-pills nav-stacked'>
          <li className={this.get_active_class(['/home', '/'])}><NavLink to="/home">Home</NavLink></li>
          <li className={this.get_active_class('/about')}><NavLink to="/about">About</NavLink></li>
          </ul>
        </div>
        <div className='col-xs-8'>
          {this.props.children}
        </div>
      </div>
    )
  }
})

