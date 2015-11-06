var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	render: function(){
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">PETWATCH</a>
					</div>
					<div id="navbar" className="collapse navbar-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li ><Link  to="owner">Owner&#39;s Listing</Link></li>
							<li ><Link  to="sitter">Sitter&#39;s Listing</Link></li>
              <li><Link to="signupowner">Owner&#39;s Signup</Link></li>
              <li><Link to="signupsitter">Sitter&#39;s Signup</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
});
