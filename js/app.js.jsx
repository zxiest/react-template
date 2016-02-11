var React = require('react');
var Foobar = require('./foobar.js');

var App = React.createClass({
  getInitialState: function() {
    return {
    }
  },
  getDefaultProps: function() {
    return {
    }
  },
  render: function() {
    return (
      <div>
        <Foobar />
      </div>
    )
  }
})

module.exports = App;
