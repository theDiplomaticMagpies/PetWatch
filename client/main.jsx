//Main page
//Route buttons Owner and Sitter
var React = require('react');
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
		if(this.props.children){
			return this.props.children
		}else{
			return (
      	<div>
          <div className="jumbotron container">
            <div className="greet">
              <h2>Welcome to PetWatch</h2>
              <p>The most interactive site for your pet sitting needs!</p>
              <p>We have the most diverse group of sitters to hire
              for the most interesting owners! With our help, find the most exotic pets, and the most responsible sitters!</p>
              <p>Come and experience the most amazing group of pets that you&#39;ll ever meet!</p>
							<p>No pet is too big or small!</p>
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
							<div className="item">
								<img src="https://metrouk2.files.wordpress.com/2014/06/ad_136683824-e1401803007200.jpg?w=748&h=493&crop=1" alt="Slide 3" />
							</div>
							<div className="item">
								<img src="http://metrouk2.files.wordpress.com/2014/06/ad_136684029.jpg?w=620&h=441&crop=1" alt="Slide 4" />

							</div>
							<div className="item">
								<img src="http://metrouk2.files.wordpress.com/2014/06/ad_136683477-e1401803215866.jpg?w=620&h=441&crop=1" alt="Slide 5" />

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
