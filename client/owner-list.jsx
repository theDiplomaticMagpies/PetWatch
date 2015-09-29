//Owner list
//contains pet pictures and info
//links to owner profiles
var React = require('react');
var OwnerProfile = require('./owner-profile');

module.exports = React.createClass({
  render: function(){
    return (
      <div>
        <OwnerProfile />
      </div>
    )
  }
})
