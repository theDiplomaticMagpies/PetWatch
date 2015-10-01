//Main page
//Route buttons Owner and Sitter
var React = require('react');
var Button = require('./button');
var Footer = require('./footer');
var Header = require('./header');

module.exports = React.createClass({
	render: function(){
		return (
			<div className="mainPage">
				<Header />
				{this.content()}
			</div>

		)
	},

	content: function(){
		if(this.props.children){
			return this.props.children
		}else {
			return (
				<div className="btnContainer">
					<Button />
				</div>
			)
		}
	}

});
