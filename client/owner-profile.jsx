//Owner Profiles
//popout window for owner and pet containing detailed information
//more pictures, possible rating?
var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
      <div>
        {this.renderPetProfile()}
        {this.renderOwnerProfile()}
      </div>
      
		)
	},
  renderOwnerProfile: function(){
      return (
        <div> 
          <h4>{this.props.firstname} {this.props.lastname} </h4>
        </div>
        )
  },
  renderPetProfile: function(){
      // return ( //this.state.(petsInfo).map(function(pet)) {})
      //   <div>
      //     <h6>{this.props.pets.name} + " " + {this.props.pets.size} + " " + {this.props.pets.species}</h6>
      //   </div>
      // )
  }

  // onChange: function(){

  // }
});
