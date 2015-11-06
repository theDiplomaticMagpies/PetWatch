var React = require('react');
var Firebase = require('firebase');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  getInitialState: function(){
    return {
      firstname: '',
      lastname: '',
      email: '',
      address: '',
      phone: '',
      description: '',
      picURL: ''
    }
  },
  render: function(){
    return (
      <div className="container">
        <div className="row centered-form">
          <div><img className="imageHolderSitter" src="https://www.petfinder.com/wp-content/uploads/2012/11/dog-how-to-select-your-new-best-friend-thinkstock99062463.jpg"/> </div>
            <div className="panel panel-default">
              <div className="panel-heading">
      			     <h3 className="panel-title">Signup as a Sitter!</h3>
      			 	</div>
      			 	<div className="panel-body">
      			     <form role="form">
      			        <div className="row">
			    					  <div className="form-group">
      			            <input className="input-bar" type="text" name="firstname" placeholder="First Name" onChange={this.handleFirstNameChange} value={this.state.firstname}/>
      			    			</div>
  			    					<div className="form-group">
  			    						<input className="input-bar" type='text' name="lastname" placeholder="Last Name" onChange={this.handleLastNameChange} value={this.state.lastname} />
  			    					</div>
      			    		</div>
    			    			<div className="row">
      			    			<div className="form-group">
      			    				<input className="input-bar" type="text" name="email" placeholder="Email" onChange={this.handleEmailChange} value={this.state.email} />
      			    			</div>
                      <div className="form-group">
                        <input className="input-bar" type="text" name="address" placeholder="Address" onChange={this.handleAddressChange} value={this.state.address} />
                      </div>
  			    					<div className="form-group">
  			    						<input className="input-bar" type="text" name="phone" placeholder="Phone Number" onChange={this.handlePhoneChange} value={this.state.phone} />
  			    					</div>
                      <div className="form-group">
                        <input className="input-bar" type="text" name="description" placeholder="A description of yourself" onChange={this.handleDescriptionChange} value={this.state.description} />
                      </div>
                      <div className="form-group">
                        <input className="input-bar" type="text" name="picURL" placeholder="A Url to your picture" onChange={this.handleUrlChange} value={this.state.picURL} />
                      </div>
    			    			</div>
      			    	  <button onClick={this.handleSubmit} disabled={!this.state.firstname || !this.state.lastname || !this.state.email || !this.state.address || !this.state.phone || !this.state.description || !this.state.picURL} className="signup-button btn btn-primary"><Link to="sitter" className="links">Signup!</Link></button>
    			    		</form>
    			    	</div>
    	    		</div>
        		</div>
          </div>
    )
  },
  handleSubmit: function(e){
    e.preventDefault();
    var ref = new Firebase("https://petwatch.firebaseio.com/");
    ref.child('sitters').push({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone,
      description: this.state.description,
      picURL: this.state.picURL
    })
  },
  handleFirstNameChange: function(e){
    this.setState({
      firstname: e.target.value
    })
  },
  handleLastNameChange: function(e){
    this.setState({
      lastname: e.target.value
    })
  },
   handleEmailChange: function(e){
    this.setState({
      email: e.target.value
    })
  },
  handleAddressChange: function(e){
    this.setState({
      address: e.target.value
    })
  },
   handlePhoneChange: function(e){
    this.setState({
      phone: e.target.value
    })
  },
  handleDescriptionChange: function(e){
    this.setState({
      description: e.target.value
    })
  },
  handleUrlChange: function(e){
    this.setState({
      picURL: e.target.value
    })
  }
})
