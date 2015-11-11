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
          <h4><b>{this.props.name}</b></h4>
          <h6><i>{this.props.description}</i></h6>
          <h6><b>Owner:</b> {this.props.firstname} {this.props.lastname}</h6>
          <h6><b>Phone:</b> {this.props.phone}</h6>
					<h6><b>Email:</b> {this.props.email}</h6>
        </div>
      </div>
    )
  }
});
