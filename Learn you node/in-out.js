var fs = require('fs'); 
var buf = fs.readFileSync('./hola.txt'); //Lee un archivo llamado hola.txt dentro del mismo directorio
var str = buf.toString();
var string = str.split('\n').length-2;
console.log(str.split());
console.log("Número de saltos = %s", string);
