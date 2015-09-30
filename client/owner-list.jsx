//Owner list
//contains pet pictures and info
//links to owner profiles
var React = require('react');
var OwnerProfile = require('./owner-profile');


module.exports = React.createClass({
  getInitialState: function(){
      return {
        owners: [{firstname: 'Nate', lastname: 'Kim', pet: '',description: 'Cat killer'},{firstname: 'Nate', lastname: 'Kim', pet: '',description: 'Cat killer'},{firstname: 'Nate', lastname: 'Kim', pet: '',description: 'Cat killer'}],
        pets: [{name: 'FEEFEEDO', species: 'catdog', size: '2'},{name: 'FEEFEEDO', species: 'catdog', size: '2'},{name: 'FEEFEEDO', species: 'catdog', size: '2'}]
      }
    },
  render: function(){
    return <div className='ownerBar'>
      {this.renderOwners()}
    </div>
  },
  renderOwners: function() {
    return this.state.owners.map(function(owner){
       return <OwnerProfile firstname={owner.firstname}
        lastname={owner.lastname} />
    })
  }
})
