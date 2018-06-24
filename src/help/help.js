module.exports = (args) => {
    const menus = {
        main: `
clanta [command] [type] [flags]

[commands]
        save      ............... save a new note.
        show      ............... Get a saved note.
        remove    ............... delete a note.

[type]
        token     ............... Refers to a token/key.
        password  ............... Password.
        note      ............... Note.

[flags]
        --name    ............... name of the token/key, password and note.
        --value   ............... The token/key, password or note.

For more specific helps and examples on save, show or remove
        clanta --help=save 
        You can replace save with show or remove
        `,
        save:`
token   :
        $clanta save token --name="xxxxx" --value="xxxxxxxxxxxxxx"
password:
        $clanta save password --name="xxxx" --value="xxxxxxxx"
note    :
        $clanta save note --name="xxxxx" --value="xx xx xxx x xxxx"`,
        show : `
token   :
        $clanta show token --name="xxxxx"
password:
        $clanta show password --name="xxxxx"
note    :
        $clanta show note --name="xxxxx"

To show all tokens , passwords or notes:

        $clanta show tokens

You can replce tokens with passwords or notes.`,
        remove : `
token   :
        $clanta remove token --name="xxxxxx" 
password:
        $clanta remove password --name="xxxx" 
note    :
        $clanta remove note --name="xxxxx"`
        }
    
    if(args.help == 'save'){
        console.log(menus.save);
    }else if(args.help == 'get'){
        console.log(menus.get);
    }else if(args.help == 'remove'){
        console.log(menus.remove);
    }else{
        console.log(menus.main);        
    }
}