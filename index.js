const minimist = require("minimist");

module.exports = () =>{
    //First two argv are not required because they are
    //the interpreter name followed by name of the file
    //being interpreted.
    const args = minimist(process.argv.slice(2));
    const command = args._[0];
    if(args.help || args.h){
        require('./src/help/help')(args);
    }else if(command == 'save'){
        require('./src/save/save')(args);
    }else if(command == 'get'){
        require('./src/get/get')(args);
    }else if(command == 'remove'){
        require('./src/remove/remove')(args);
    }else{
        console.log(`command  is not valid \n\n for help :\n \t clanta --help or clanta --h \n `);
    }
}