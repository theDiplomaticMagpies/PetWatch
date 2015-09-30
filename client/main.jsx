//Main page
//Route buttons Owner and Sitter
var React = require('react');
var Button = require('./button');
var Footer = require('./footer');
var Header = require('./header');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
	render: function(){
		return (
			<div className="mainPage">
				<Header />
				{this.content()}
				<Footer />
			</div>

		)
	},
	handleClick: function(){
		console.log('clicked nothing happen');
	},

	content: function(){
		if(this.props.children){
			return this.props.children
		}else {
			return (
				<div className="btnContainer">

				<span><Button whenClicked={this.handleClick}buttontitle="Owner" className="ownerButton" /></span>

				<span><Button buttontitle="Sitter" className="sitterButton" /></span>
			</div>
			)
		}
	}

});
