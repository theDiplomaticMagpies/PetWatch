//Sitter List
//contains a list of sitters and their basic info
//profile view link
var React = require('react');
var SitterProfile = require('./sitter-profile');

module.exports = React.createClass({
	getInitialState: function(){
      return {
        sitters: [{firstname: 'Nate', lastname: 'Kim', pet: '',description: 'Cat killer'},{firstname: 'Nate', lastname: 'Kim', pet: '',description: 'Cat killer'},{firstname: 'Nate', lastname: 'Kim', pet: '',description: 'Cat killer'}]
      }
    },
  	render: function(){
	    return <div>
	      		{this.renderSitters()}
	    	</div>
		 },
	renderSitters: function() {
	    return this.state.sitters.map(function(sitter){
	       return <SitterProfile firstname={sitter.firstname}
	        lastname={sitter.lastname} />
	    })
  }
});
