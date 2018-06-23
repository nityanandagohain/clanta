### CLANTA

#### A command Line note taking application for storing tokens,passwords and other small notes.

#### commands

#### Help:

`$clanta --help` or `$clanta -h`

`$clanta --help=save` or replace save with get,remove.

#### Save :

`$clanta save token --name="xtoken" --token="kjdas"`

`$clanta save password --name="xpassword" --password="xxxxx"`

`$clanta save note --name="my_note" --note="Hi I am good"`

#### Get/Retive :

`$clanta get token --name="xtoken"`

`$clanta get password --name="xpassword"`

`$clanta get note --name="my_note"`

* To get all tokens , passwords or notes

`$clanta get  tokens`

or replce tokens , with passwords or notes.

#### Remove/delete

`$clanta remove token --name="xtoken"`

`$clanta remove password --name="xpassword"`

`$clanta remove note --name="my_note"`