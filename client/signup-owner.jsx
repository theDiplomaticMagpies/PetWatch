var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
  <div id='signup'>
    <h1>signup</h1>
    <form className="signupForm">
      <input type='text' name="username"/>
      <input type="password" name="password"/>
      <input type="text" name="firstname"/>
      <input type='text' name="lastname"/>
      <input type="text" name="email"/>
      <input type='text' name="address"/>
      <input type="text" name="phone"/>
      <input type="text" name="petName"/>
      <input type='text' name="petSpecies"/>
      <input type="text" name="petDescription"/>
      <input type="text" name="petUrl"/>
      <button>signup</button>
    </form>
    <a href="#/login">Already have an account? <strong>Signin</strong> ...</a>
  </div>

    )
  }
})
