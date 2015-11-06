var React = require('react');
var OwnerProfile = require('./owner-profile');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var urlRoot = 'https://petwatch.firebaseio.com/';

module.exports = React.createClass({
  getInitialState: function(){
    return {
      owners: []
    }
  },
  mixins: [ ReactFire ],
  componentWillMount: function(){
    this.bindAsArray(new Firebase(urlRoot + 'owners'), 'owners');
  },
  render: function(){
    return (
      <div>
        {this.renderOwners()}
      </div>
    )
  },
  renderOwners: function() {
    return this.state.owners.map(function(owner){
      return <OwnerProfile picUrl={owner.pets.picURL} firstname={owner.firstname}
        lastname={owner.lastname} name={owner.pets.name} description={owner.pets.description} phone={owner.phone}
        email={owner.email}/>
    })
  }
});
