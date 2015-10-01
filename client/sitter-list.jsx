//Sitter List
//contains a list of sitters and their basic info
//profile view link
var React = require('react');
var SitterProfile = require('./sitter-profile');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var urlRoot = 'https://petwatch.firebaseio.com/';

module.exports = React.createClass({
  mixins:[ReactFire],
	getInitialState: function(){
      return {
        sitters: []
      }
   },
  componentWillMount: function(){
    this.bindAsArray(new Firebase(urlRoot + 'sitters'), 'sitters');

  },
  render: function(){
    return <div>
      		   {this.renderSitters()}
    	    	</div>
	},
	renderSitters: function() {
	    return this.state.sitters.map(function(sitter){
	       return <SitterProfile picURL={sitter.picURL} firstname={sitter.firstname}
	        lastname={sitter.lastname} description={sitter.description}
          phone={sitter.phone} email={sitter.email} address={sitter.address}/>
	    });
  	}
});
