var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
         <div className='well col-md-6'>
           {this.renderSitterProfile()}
         </div>
		)
	},
	//sets up the base html for a sitter, render in the sitter-list.jsx
  renderSitterProfile: function(){
    return (
      <div className='sitterThumbnail'>
        <img className='sitterPic' src={this.props.picURL}/>
        <div className='sitterCaption'>
          <h4><b>{this.props.firstname} {this.props.lastname}</b></h4>
          <h6>{this.props.description}</h6>
          <h6><b>Address: </b>{this.props.address}</h6>
          <h6><b>Phone: </b>{this.props.phone}</h6>
          <h6><b>Email: </b>{this.props.email}</h6>
        </div>
      </div>
    );
  }
});
