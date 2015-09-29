//Sitter List
//contains a list of sitters and their basic info
//profile view link
var React = require('react');
var SitterProfile = require('./sitter-profile');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<SitterProfile />
			</div>
		)
	}
})
