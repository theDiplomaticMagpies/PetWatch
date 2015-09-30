var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<button>{this.props.buttontitle}</button>
			</div>	
		)
	}
});