//Main page
//Route buttons Owner and Sitter
var React = require('react');
var Button = require('./button');
var Footer = require('./footer');
var Header = require('./header');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<Header /><br/><br/><br/><br/>
				{this.content()}<br/><br/><br/>
				<Footer />
			</div>

		)
	},
	content: function(){
		if(this.props.children){
			return this.props.children
		}else {
			return (
				<div>
				<Button buttontitle="Owner" className="ownerButton"/>
				<Button buttontitle="Sitter" className="sitterButton"/>
			</div>
			)
		}
	}

});
