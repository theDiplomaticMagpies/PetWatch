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
    <a href="#/signup">Dont have an account? <strong>Signup</strong> ...</a></div>
    )
  }
});
