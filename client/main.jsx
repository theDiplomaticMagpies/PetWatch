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
		if(this.props.children){
			return this.props.children
		}else {
			return (

					<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>


            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src="http://www.forkingandcountry.com/sites/g/files/g2000004371/f/sample_01.jpg" alt="..." />
                <div className="carousel-caption">
                  Under carousel caption
                </div>
              </div>
              <div className="item">
                <img src="http://www.forkingandcountry.com/sites/g/files/g2000004371/f/sample_01.jpg" alt="..." />
                <div className="carousel-caption">
                  this is a carousel caption
                </div>
              </div>
              i don tknow what i am
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

			)
		}
	}

});
