const minimist = require("minimist");

module.exports = () =>{
    //First two argv are not required because they are
    //the interpreter name followed by name of the file
    //being interpreted.
    const args = minimist(process.argv.slice(2));
    const cmd = args._[0];
}