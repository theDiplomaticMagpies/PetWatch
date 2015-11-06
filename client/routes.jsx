var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var OwnerList = require('./owner-list');
var SitterList = require('./sitter-list');
var Main = require('./main');
var Login = require('./login');
var SignUpOwner = require('./signup-owner');
var SignUpSitter = require('./signup-sitter');

module.exports = (
	<Router>
    <Route path="/" component={Main}>
  		<Route path="signupowner" component={SignUpOwner} />
  		<Route path="signupsitter" component={SignUpSitter} />
	    <Route path="owner" component={OwnerList} />
	    <Route path="sitter" component={SitterList} />
	  </Route>
  </Router>
)
