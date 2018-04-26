var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extend:true }));
app.use(bodyParser.json());

var port = process.env.port || 8000;

// Routes
var router = express.Router();

router.get('/', function(req, res){
	res.json({ 'message': 'get /'})
}); 


// Start my app
app.use('/api', router);

app.listen(port);
console.log('its up')