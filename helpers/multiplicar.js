const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, limite = 10) => {
    try {
        
        let salida, consola = '';
        
        for (let index = 0; index <= limite; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
            consola += `${base}`.green + ' x '.yellow +  `${index}`.green + ' = '.yellow + `${base * index}\n`.blue;
        }
        
        const nameFile = `tabla-${base}.txt`
        
        fs.writeFileSync(`./salida/${nameFile}`, salida);
        
        if (listar) {
            console.log('================================='.red);
            console.log(`=         Tabla del ${base}           =`.red);
            console.log('================================='.red);    
            console.log(consola);
        }

        return nameFile;
            
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}