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
            <h2><b>{this.props.name}</b></h2>
            <h4><i>{this.props.description}</i></h4>
            <h5><b>Owner:</b> {this.props.firstname} {this.props.lastname}</h5>
            <h5><b>Phone:</b> {this.props.phone}</h5>
						<h5><b>Email:</b> {this.props.email}</h5>

          </div>

        </div>

      )
  }
});
