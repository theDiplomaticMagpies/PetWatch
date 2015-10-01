//Sitter profile
//popout window from sitter list with picture/s
//more detailed info about sitter
//possible rating?
var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
     <div className='col-sm-4'>
       {this.renderSitterProfile()}
     </div>
		)
	},
  renderSitterProfile: function(){
      return (
        <div className='sitterThumbnail'>
          <img src='http://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg'/>
          <div className='sitterCaption'>
            <h4>{this.props.firstname} {this.props.lastname} </h4>
            <h6 maxlength="160">{this.props.description}</h6>
          </div>
        </div>
        )
  }

});
