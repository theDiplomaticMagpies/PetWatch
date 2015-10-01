//Owner Profiles
//popout window for owner and pet containing detailed information
//more pictures, possible rating?
var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
      <div className='col-sm-4'>
        {this.renderOwnerProfile()}
      </div>

		)
	},
  renderOwnerProfile: function(){
      return (
        turn (
        <div className='ownerThumbnail'>
          <img src='http://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg'/>
          <div className='ownerCaption'>
          <h4>{this.props.firstname} {this.props.lastname} </h4>
          </div
        </div>
      )
  }
});
