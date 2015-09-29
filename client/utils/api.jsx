var Fetch = require('whatwg-fetch');

module.exports = {
	get: function(url){
		return fetch(url, {
			//Put some info here
		})
		.then(function(response){
			return response.json();
		})
	},
	postSignup: function(username, password){
		return fetch('url', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: username,
				password: password
			})
		})
	},
	postListing: function(){
		return fetch('url', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				//Post entire listing 
			})
		})
	}
}