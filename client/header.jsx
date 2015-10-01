var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	render: function(){
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">WATCHING YOUR PETS</a>
					</div>
					<div id="navbar" className="collapse navbar-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li ><Link  to="owner">Owner</Link></li>
							<li ><Link  to="sitter">Sitter</Link></li>
              <li><Link to="signupowner">Signup for Owner</Link></li>
              <li><Link to="signupsitter">Signup for Sitter</Link></li>


						</ul>
					</div>
				</div>
			</nav>
		)
	}
});
