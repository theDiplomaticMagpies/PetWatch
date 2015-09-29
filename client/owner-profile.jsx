//Owner Profiles
//popout window for owner and pet containing detailed information
//more pictures, possible rating?
var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return {
			topics: {firstname: 'Nate', lastname: 'Kim', pet: '',description: 'Cat killer'}
		}
	},
	render: function(){
		return (
			<div>
				<span>{this.state.topics.firstname}</span>
			</div>
		)
	}
});
