const {option} = require("yargs");
const { require } = require("yargs");
const {crearArchivo} = require(`./helpers/multiplicar`)


console.clear();

const base = 5;
let salida= "";
const argv = require(`yargs`)
.option(`b`, {
    alias: `base`,
    type: `number`,
    demandOption :true

})
.option(`l`, {
    alias: `listar`,
    type: `boolean`,
    demandOption :true,
    default: false
})
.check( (argv, option) => {
    if(isNaN(argv.b)){
     throw `la base tiene q ser un numero`;}
    else
        return true;
})


.argv;
console.log(argv);
console.log(`base:yargs`, argv.base);


/*
for (let index = 0; index < 10; index++) {
    salida +=`${base}  x  ${index} = ${base * index}`;
    
}

console.log(salida);
*/

/*
crearArchivo (argv.b)
.then(nombreArchivo => console.log(nombreArchivo, `creado`))
catch(err => console.log(err));*/

