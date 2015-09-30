//Main page
//Route buttons Owner and Sitter
var React = require('react');
var Button = require('./button');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				{this.content()}
			</div>
		)
	},
	content: function(){
		if(this.props.children){
			return this.props.children
		}else {
			return <div>
				<Button buttontitle="Owner" />
				<Button buttontitle="Sitter" />
			</div>
		}
	}

});