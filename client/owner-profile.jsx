//Owner Profiles
//popout window for owner and pet containing detailed information
//more pictures, possible rating?
var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return {
			owners: {firstname: 'Nate', lastname: 'Kim', pet: '',description: 'Cat killer'},
      pets: {name: 'FEEFEEDO', species: 'catdog', size: '2'}
		}
	},
	render: function(){
		return (
			<div>
        {this.renderPetProfile()}
        {this.renderOwnerProfile()}
			</div>
		)
	},
  renderOwnerProfile: function(){
    render: function(){
      return ( //this.state.(ownersInfo).map(function(owner){})
        <div>
          <h4>{this.state.owners.firstname} + " " + {this.state.owners.lastname} </h4>
        </div>
        )
    }

  },
  renderPetProfile: function(){
    render: function() {
      return ( //this.state.(petsInfo).map(function(pet)) {})
        <div>
          <h6>{this.state.pets.name} + " " + {this.state.pets.size} + " " + {this.state.pets.species}</h6>
        </div>

        )
    }

  },

  // onChange: function(){

  // }
});
