module.exports = (args) => {
    const menus = {
        main: `
        clanta [command] [type]

        save      ............... save a new note
        get       ............... Get a saved note  
        remove    ............... delete a note`,
            
        save:`
        token   :
                clanta save token --name="xtoken" --value="hkja"
        password:
                $clanta save password --name="xpassword" --value="xxxx"
        note    :
                $clanta save note --name="my_note" --value="Hi I am good"`,
        get : `
        token   :
                $clanta show token --name="xtoken"
        password:
                $clanta show password --name="xpassword"
        note    :
                $clanta show note --name="my_note"
    
        To show all tokens , passwords or notes:
    
                $clanta show  tokens
    
        or replce tokens , with passwords or notes.`,
        remove : `
        token   :
                clanta remove token --name="xtoken" 
        password:
                $clanta remove password --name="xpassword" 
        note    :
                $clanta remove note --name="my_note"`
        }
    
    if(args.help == 'save'){
        console.log(menus.save);
    }else if(args.help == 'get'){
        console.log(menus.get);
    }else if(args.help == 'remove'){
        console.log(menus.remove);
    }else{
        console.log(menus.main);        
        console.log(menus.save);
        console.log(menus.get);
        console.log(menus.remove);
    }
}