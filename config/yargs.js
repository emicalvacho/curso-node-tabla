const argv = require('yargs')
                .options('b',{
                    alias: 'base',
                    demandOption: true,
                    type: 'number',
                    description: 'is the base to multiply'
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)) {
                        throw 'The base must be a number';
                    }
                    return true;
                })
                .options('l', {
                    alias: 'list',
                    default: false,
                    type: 'boolean',
                    description: 'show or not list'
                })
                .options('h', {
                    alias: 'height',
                    default: 10,
                    type: 'number',
                    description: 'limit amount number to multiply'
                })
                .argv;

module.exports = argv;