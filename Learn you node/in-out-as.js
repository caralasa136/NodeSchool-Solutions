var fs = require('fs'); 
var nombre = process.argv[2];
var archivo = fs.readFile(nombre, function(err, data)
{
	console.log(data.toString().split('\n'));
	console.log(data.toString().split('\n').length - 2);
});
