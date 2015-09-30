var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				{this.renderOwner()}
			</div>
		)
	},
	renderOwner: function(){
		return(
	<div>
		<button className="btn btn-primary"><Link to="owner">Owner</Link></button>
		<button className="btn btn-primary"><Link to="sitter">Sitter</Link></button>
	</div>
		)
	}
});
