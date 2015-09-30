var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/history');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var OwnerList = require('./owner-list');

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={OwnerList}>

    </Route>
  </Router>

)