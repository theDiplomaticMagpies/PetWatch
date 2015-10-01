//Main page
//Route buttons Owner and Sitter
var React = require('react');
var Button = require('./button');
var Footer = require('./footer');
var Header = require('./header');

module.exports = React.createClass({
	render: function(){
		return (
			<div className="mainPage">
				<Header />
				{this.content()}
			</div>

		)
	},

	content: function(){
		if (this.props.children){
			return this.props.children
		} else {
			return (
        <div>
          <div className="jumbotron container">
            <div className="greet">
              <h2>Come meet PEOPLE</h2>
              <p>Welcome to the most interactive SITTER FINDING app for your pets!</p>
              <p>We have the most diverse group of sitters to hire
              for the most interesting owners! With our services, find the generic to the exotic
              pets to watch!</p>
              <p>Come and experience the amazing group of pets that you&#39;ll ever meet!</p>

            </div>
          </div>

          <div id="carousel-example-generic" className="carousel slide container" data-ride="carousel">


            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src="http://www.extremetech.com/wp-content/uploads/2013/09/4Vln8-640x428.jpg" alt="Slide 1" />

              </div>
              <div className="item">
                <img src="http://justsomething.co/wp-content/uploads/2014/04/most-adorable-animals-5.jpg" alt="Slide 2" />

              </div>
            </div>


            <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
			)
		}
	}

});
