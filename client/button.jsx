var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<button className={this.props.className + " btn btn-primary"}>{this.props.buttontitle}</button>
			</div>
		)
	}
});
