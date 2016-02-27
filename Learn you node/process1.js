var i, suma = 0, max = process.argv.length;

for(i=2;i<max;i++)
{
        var suma = suma + Number(process.argv[i])
}
console.log("Suma = %d\n",suma);

/*
console.log(process.argv);
console.log(process.argv.length);
*/
