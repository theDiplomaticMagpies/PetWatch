//Sitter List
//contains a list of sitters and their basic info
//profile view link
var React = require('react');
var SitterProfile = require('./sitter-profile');

module.exports = React.createClass({
	getInitialState: function(){
      return {
        sitters: [{firstname: 'Ted', lastname: 'Leeroy', pet: '',description: 'Cat eater lsjdflsjd ljsd ljsldj lsdjlsd jlsd jlsdjlk;sd jls'},{firstname: 'Ted', lastname: 'Leeroy', pet: '',description: 'Cat killer'},{firstname: 'Ted', lastname: 'Leeroy', pet: '',description: 'Cat eater'},
        {firstname: 'Ted', lastname: 'Leeroy', pet: '',description: 'Cat eater'},{firstname: 'Ted', lastname: 'Leeroy', pet: '',description: 'Cat killer'},{firstname: 'Ted', lastname: 'Leeroy', pet: '',description: 'Cat eater'},
        {firstname: 'Ted', lastname: 'Leeroy', pet: '',description: 'Cat eater'},{firstname: 'Ted', lastname: 'Leeroy', pet: '',description: 'Cat killer'},{firstname: 'Ted', lastname: 'Leeroy', pet: '',description: 'Cat eater'},
        {firstname: 'Ted', lastname: 'Leeroy', pet: '',description: 'Cat eater'},{firstname: 'Ted', lastname: 'Leeroy', pet: '',description: 'Cat killer'},{firstname: 'Ted', lastname: 'Leeroy', pet: '',description: 'Cat eater'}

        ]
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
	        lastname={sitter.lastname} description={sitter.description}/>
	    });
  	}
});
