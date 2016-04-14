var http = require('http');
var direccion = process.argv[2];

http.get(direccion, function(response)
{
	response.setEncoding('utf8');
	response.on("data", function(data)
	{
		console.log(data);
	})
	response.on('error', function(error)
	{
		console.log(error);
	})
});
