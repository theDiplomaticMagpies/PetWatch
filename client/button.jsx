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
		<Link className="links" to="owner"><button className="ownerButton btn btn-primary">Owner</button></Link>
		<Link className="links" to="sitter"><button className="sitterButton btn btn-primary">Sitter</button></Link>
	</div>
		)
	}
});
