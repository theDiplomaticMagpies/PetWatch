//Main page
//Route buttons Owner and Sitter
var React = require('react');

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
				I dont like you
			</div>
		}
	}

});