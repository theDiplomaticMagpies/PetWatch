var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
      <div className='signin'>
        <h1>signin</h1>
        <form className="signinForm">
          <input type='text' />
          <input type="password" />
          <button>signin</button>
        </form>
        <a href="#/signupowner">Dont have an account? Have a pet? Want it watched? <strong>Signup</strong> ...</a>
        <a href="#/signupsitter">Dont have an account? Want to make some money? Love animals? <strong>Signup</strong> ...</a>
      </div>
    )
  }
});
