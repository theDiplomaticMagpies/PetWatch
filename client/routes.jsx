var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var OwnerList = require('./owner-list');
var SitterList = require('./sitter-list');
var Main = require('./main');

module.exports = (
	<Router>
	    <Route path="/" component={Main}>
	    	<Route path="owner" component={OwnerList} />
	    	<Route path="sitter" component={SitterList} />
	    </Route>
    </Router>
)