var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  getInitialState: function(){
    return {
      firstname: '',
      lastname: '',
      email: '',
      name: '',
      phone: '',
      description: '',
      species: '',
      picURL: ''
    }
  },
  render: function(){
    return (
      <div className="container">
        <div className="row centered-form">
          <div><img className="imageHolderOwner" src="http://images.medicaldaily.com/sites/medicaldaily.com/files/2013/08/04/0/62/6259.jpg" /></div>
            <div className="panel panel-default owner-panel">
              <div className="panel-heading">
                <h3 className="panel-title">Signup as an Owner!</h3>
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
			                 <input className="input-bar" type='text' name="name" placeholder="Your pet's name" onChange={this.handlePetNameChange} value={this.state.name} />
			               </div>
			               <div className="form-group">
			                 <input className="input-bar" type="text" name="phone" placeholder="Phone Number" onChange={this.handlePhoneChange} value={this.state.phone} />
			               </div>
                     <div className="form-group">
                       <input className="input-bar" type="text" name="description" placeholder="A description of your pet" onChange={this.handleDescriptionChange} value={this.state.description} />
                     </div>
                     <div className="form-group">
                       <input className="input-bar" type="text" name="species" placeholder="What kind of animal is your pet?" onChange={this.handleSpeciesChange} value={this.state.species} />
                     </div>
                     <div className="form-group">
                       <input className="input-bar" type="text" name="picURL" placeholder="A Url to your pet's picture" onChange={this.handleUrlChange} value={this.state.picURL} />
                    </div>
                  </div>
			            <button onClick={this.handleSubmit} disabled={!this.state.firstname || !this.state.lastname || !this.state.email || !this.state.phone || !this.state.name || !this.state.description || !this.state.species || !this.state.picURL} className="signup-button btn btn-primary"><Link to="owner" className="links">Signup!</Link></button>
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
    ref.child('owners').push({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      email: this.state.email,
      pets: {
        name: this.state.name,
        description: this.state.description,
        picURL: this.state.picURL,
        species: this.state.species
      }
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
  handlePetNameChange: function(e){
     this.setState({
       name: e.target.value
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
  },
  handleSpeciesChange: function(e){
    this.setState({
      species: e.target.value
    })
  }
})
