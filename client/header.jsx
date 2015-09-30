var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container">
					<div className="navbar-header">
						<a className="navbar-brand" href="#">Project name</a>
					</div>
					<div id="navbar" className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<li className="active"><a href="#">Home</a></li>
							<li className="active"><a href="#">About</a></li>
							<li className="active"><a href="#">Contact</a></li>
							<li className="active"><a href="#">OK</a></li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
});
