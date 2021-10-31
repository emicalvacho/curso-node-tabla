const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then( nameFile => console.log(nameFile.rainbow, 'creado'.rainbow))
    .catch(err => console.log(err))