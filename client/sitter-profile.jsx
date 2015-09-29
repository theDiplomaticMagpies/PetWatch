//Sitter profile
//popout window from sitter list with picture/s
//more detailed info about sitter
//possible rating?
var React = require('react');

module.exports = React.createClass({
			getInitialState: function(){
				return {
					topics: {firstname: 'Nate', lastname: 'Kim', description: 'Cat killer'}
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