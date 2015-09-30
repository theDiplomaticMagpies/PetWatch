//Sitter profile
//popout window from sitter list with picture/s
//more detailed info about sitter
//possible rating?
var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
	      <div>
	        {this.renderSitterProfile()}
	      </div>
		)
	},
  renderSitterProfile: function(){
      return (
        <div> 
          <h4>{this.props.firstname} {this.props.lastname} </h4>
        </div>
        )
  }
  
});
