### CLANTA

#### A command Line note taking application for storing tokens/key,passwords and other small notes.

#### commands

#### Help:

`$clanta --help` or `$clanta -h`

`$clanta --help=save` or replace save with show,remove.

#### Save :

`$clanta save token --name="xtoken" --value="kjdas"`

`$clanta save password --name="xpassword" --value="xxxxx"`

`$clanta save note --name="my_note" --value="Hi I am good"`

#### Get/Retrive :

`$clanta show token --name="xtoken"`

`$clanta show password --name="xpassword"`

`$clanta show note --name="my_note"`

* To show all tokens , passwords or notes

`$clanta show  tokens`

or replce tokens , with passwords or notes.

#### Remove/delete

`$clanta remove token --name="xtoken"`

`$clanta remove password --name="xpassword"`

`$clanta remove note --name="my_note"`