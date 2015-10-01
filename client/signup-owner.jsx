var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      firstname: '',
      lastname: '',
      email: '',
      petname: '',
      phone: '',
      description: '',
      species: '',
      picURL: ''
    }

  },
  render: function(){
    return (
  <div id='signup'>
    <h1>signup</h1>
    <form className="signupForm input-group">
      First Name: <input type="text" name="firstname" onChange={this.handleFirstNameChange} value={this.state.firstname}/>
      Last Name: <input type='text' name="lastname" onChange={this.handleLastNameChange} value={this.state.lastname} />
      Email: <input type="text" name="email" onChange={this.handleEmailChange} value={this.state.email} />
      Pet Name: <input type='text' name="address" onChange={this.handlePetNameChange} value={this.state.petname} />
      Phone: <input type="text" name="phone" onChange={this.handlePhoneChange} value={this.state.phone} />
      Description: <input type="text" name="description" onChange={this.handleDescriptionChange} value={this.state.description} />
      Species: <input type="text" name="species" onChange={this.handleSpeciesChange} value={this.state.species} />
      Pet Profile Url: <input type="text" name="picURL" onChange={this.handleUrlChange} value={this.state.picURL} />
      <button onClick={this.handleSubmit}>signup</button>
    </form>
    <a href="#/login">Already have an account? <strong>Signin</strong> ...</a>
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
        petname: this.state.petname,
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
       petname: e.target.value
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
