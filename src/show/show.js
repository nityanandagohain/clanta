const jsonfile = require('jsonfile');

module.exports = (args) => {
    let displayAll = false;
    if (!args.name) {
        if (args._[1] == 'tokens' || args._[1] == 'passwords' || args._[1] == 'notes') {
            displayAll = true;
        } else {
            console.log("Please enter a name");
        }
    }
    if (args._[1] == 'token' || args._[1] == 'tokens') {
        showToken(args, displayAll);
    } else if (args._[1] == 'password' || args._[1] == 'passwords') {
        showPassword(args, displayAll);
    } else if (args._[1] == 'note' || args._[1] == 'notes') {
        showNote(args, displayAll);
    } else {
        console.log("Enter correct command:\n\t token, password or note\n\n");
    }

}

showToken = (args, dispAll) => {
    let location = `~/.config/clanta/tokens.json`;
    let data = getDataFromFile(location);
    if (dispAll) {
        console.log("Tokens/keys:")
        displayAllData(data);
    } else {
        try {
            let tempValue = searchDataByName(args.name, data);
            console.log(`${tempValue[0]} : ${tempValue[1]}`);
        } catch (err) {
            console.log(`No ${args._[1]} found of name ${args.name}`);
        }
    }
}

showPassword = (args, dispAll) => {
    let location = `~/.config/clanta/passwords.json`;
    let data = getDataFromFile(location);
    if (dispAll) {
        console.log(`Passwords:`);
        displayAllData(data);
    } else {
        try {
            let tempValue = searchDataByName(args.name, data);
            console.log(`${tempValue[0]} : ${tempValue[1]}`);
        } catch (err) {
            console.log(`No ${args._[1]} found of name ${args.name}`);
        }
    }
}

shownNote = (args, dispAll) => {
    let location = `~/.config/clanta/notes.json`;
    let data = getDataFromFile(location);
    if (dispAll) {
        console.log("Notes:");
        displayAllData(data);
    } else {
        try {
            let tempValue = searchDataByName(args.name, data);
            console.log(`${tempValue[0]} : ${tempValue[1]}`);
        } catch (err) {
            console.log(`No ${args._[1]} found of name ${args.name}`);
        }
    }
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

displayAllData = (data) => {
    let array = data.arr;
    for (let i = 0; i < array.length; i++) {
        console.log(` ${array[i][0].padEnd(15)} : ${array[i][1]}`);
    }
}

searchDataByName = (name, data) => {
    let array = data.arr;
    for (let i = 0; i < array.length; i++) {
        if (array[i][0] == name) {
            return array[i];
        }
    }
}