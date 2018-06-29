const mkdirp = require('mkdirp');
const jsonfile = require('jsonfile');
const homeDir = require('os').homedir();

module.exports = (args) => {
    if (!args.name || !args.value) {
        console.log("Please enter proper name and value");
        process.exit();
    }
    switch (args._[1]) {
        case 'token':
            saveToken(args);
            break;
        case 'password':
            savePassword(args);
            break;
        case 'note':
            saveNote(args);
            break;
        default:
            console.log("Enter correct command:\n\t token, password or note\n\n");
    }
}

saveToken = (args) => {
    let tokenFileLocation = homeDir + '/.config/clanta/tokens.json';
    let token = [args.name, args.value];
    writeToFile(tokenFileLocation, token);
    console.log("Token Saved");
}

savePassword = (args) => {
    let passwordFileLocation = homeDir + '/.config/clanta/passwords.json';
    let password = [args.name, args.value];
    writeToFile(passwordFileLocation, password);
    console.log("Password Saved")
}

saveNote = (args) => {
    let notesFileLocation = homeDir + '/.config/clanta/notes.json';
    let note = [args.name, args.value];
    writeToFile(notesFileLocation, note);
    console.log("Note Saved");
}

writeToFile = (location, value) => {
    jsonfile.readFile(location, (err, data) => {
        if (data != undefined) {
            data.arr.push(value);
        } else {
            data = { arr: [value] };
            mkdirp.sync(homeDir + '/.config/clanta/');
        }
        jsonfile.writeFile(location, data, (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
        })
    });
}