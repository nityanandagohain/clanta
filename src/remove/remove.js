const jsonfile = require('jsonfile');
const homeDir = require('os').homedir();

module.exports = (args) => {
    if (!args.name) {
        console.log(`Please enter the name of ${args._[1]}`);
    }

    switch (args._[1]) {
        case 'token':
            removeToken(args);
            break;
        case 'password':
            removePassword(args);
            break;
        case 'note':
            removeNote(args);
            break;
        default:
            console.log("Enter correct command:\n\t token, password or note\n\n");
    }
}

removeToken = (args) => {
    let location = homeDir + `/.config/clanta/tokens.json`
    let data = getDataFromFile(location);
    data = searchDataByNameAndDelete(args.name, data);
    writeToFile(location, data);
}

removePassword = (args) => {
    let location = homeDir + `/.config/clanta/passwords.json`
    let data = getDataFromFile(location);
    data = searchDataByNameAndDelete(args.name, data);
    writeToFile(location, data);
}

removeNote = (args) => {
    let location = homeDir + `/.config/clanta/passwords.json`
    let data = getDataFromFile(location);
    data = searchDataByNameAndDelete(args.name, data);
    writeToFile(location, data);
}

getDataFromFile = (location) => {
    let tempData = { arr: [] };
    try {
        tempData = jsonfile.readFileSync(location);
    } catch (err) {
        console.log("Unable to read file! No data found");
    }
    return tempData;
}

searchDataByNameAndDelete = (name, data) => {
    for (let i = 0; i < data.arr.length; i++) {
        if (data.arr[i][0] == name) {
            data.arr.splice(i, 1);
            break;
        }
    }
    console.log(`"${name}" removed!`)
    return data;
}

writeToFile = (location, data) => {
    jsonfile.writeFile(location, data, (err) => {
        if (err) {
            console.log(err);
            throw err;
        }
    })
}