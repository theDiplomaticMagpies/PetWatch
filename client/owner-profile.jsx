//Owner Profiles
//popout window for owner and pet containing detailed information
//more pictures, possible rating?
var React = require('react');


module.exports = React.createClass({
	render: function(){
		return (
      <div className='well col-md-6'>
        {this.renderOwnerProfile()}
      </div>
		)
	},
  renderOwnerProfile: function(){
      return (
        <div className='ownerThumbnail'>
          <img className='petPic' src={this.props.picUrl} />
          <div className='ownerCaption'>
            <h4>{this.props.firstname}</h4>
            <h6>{this.props.description}</h6>
            <h6>{this.props.phone}<br/>
						 {this.props.email}</h6>

          </div>

        </div>

      )
  }
});
