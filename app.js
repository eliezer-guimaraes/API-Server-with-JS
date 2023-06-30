const express = require('express');
const main_api = require('./api.json');

/*Variables
Put 1 for open a server and run an API(main_api)
Put 2 for use an especific API*/
const choice = null;
const port = 3040 //Default server port
const url = `http://localhost:${port}` //Default api URL

//Server opening function
function Server(open, data){
	let app = express();
	app.get('/', async(req, res) => {
		if(res.status(200)){
			return res.status(200).json(data)
		}
	})
	console.log(`Server is running on: http://localhost:${open}`)
	app.listen(open);
}

if (choice == 1){
	Server(port, main_api)
}else if (choice == 2){
	fetch(url).then(function(response) {
		return response.json()
	}).then(body => {
		console.log(body)
	})
}else{
	console.log("\n====> Error! \n====> Please, becareful with the variables values! Take a look in the main script.")
}