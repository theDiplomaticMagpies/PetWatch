var React = require('react');
var Firebase = require('firebase');

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
  <div id='signup'>
    <h1>signup</h1>
    <form className="signupForm input-group">
      First Name: <input type="text" name="firstname" onChange={this.handleFirstNameChange} value={this.state.firstname}/>
      Last Name: <input type='text' name="lastname" onChange={this.handleLastNameChange} value={this.state.lastname} />
      Email: <input type="text" name="email" onChange={this.handleEmailChange} value={this.state.email} />
      Address: <input type='text' name="address" onChange={this.handleAddressChange} value={this.state.address} />
      Phone: <input type="text" name="phone" onChange={this.handlePhoneChange} value={this.state.phone} />
      Description: <input type="text" name="description" onChange={this.handleDescriptionChange} value={this.state.description} />
      <button onClick={this.handleSubmit}>signup</button>
    </form>
    <a href="#/login">Already have an account? <strong>Signin</strong> ...</a>
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
      picURL: 'http://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg'
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
})
