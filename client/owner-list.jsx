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
    return this.state.owners.map(function(owner){
      this.state.pets.map(function(pet){
        <div>
          <OwnerProfile
          firstname={owner.firstname}
          lastname={owner.lastname}
          name={pet.name}
          size={pet.size}
          species={pet.species} />
        </div>

      })
    })
    )
  }
  renderOwners: function() {
    return this.state.
  }
})
