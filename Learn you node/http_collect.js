var concat = require('concat-stream');
var http = require('http');
var direccion = process.argv[2];

http.get(direccion,function(response){
response.pipe(concat(function(data){
console.log(data.length);
console.log(data);
}));
});
