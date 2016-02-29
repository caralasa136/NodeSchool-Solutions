var fs = require('fs');
var nombre = process.argv[2];
var extension = process.argv[3];
var ruta = RegExp('\\.' + extension);

var file = fs.readdir(nombre, function(err, files){
	for(i=0;i<files.length;i++){
	if(ruta.test(files[i])){
	console.log(files[i]);
}
}
});
