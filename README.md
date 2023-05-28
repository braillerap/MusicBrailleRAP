# MusicBrailleRAP
Music score transcription software for BrailleRAP. NVDA compatible.
The project use liblouisreact, a liblouis version slightly modified to run in react.js environnement.
The projet use music21 python module to translate MusicXML files into Braille text, ready to emboss on a 
BrailleRAP.

This is still a work in progress project

LibLouis
========
The original version of liblouis is available here [https://github.com/liblouis/liblouis](https://github.com/liblouis/liblouis)
The modified version for react.js is available here [https://github.com/crocsg/liblouis](https://github.com/crocsg/liblouis)
The module for react.js is available here [https://github.com/crocsg/liblouisreact](https://github.com/crocsg/liblouisreact)

liblouis and liblouisreact are licensed under GNU LGPL V2.1

Music21
=======
Music21 is a Python based toolkit for computer-aided musicology.
Music21 is licensed under the BSD License.
You can found more info on Music21 here [http://web.mit.edu/music21/](http://web.mit.edu/music21/)

# Screenshot

![](./screenshot.jpg)

![](./screenshot2.jpg)

# How to install
Install Chrome.

Install BrailleRAP [drivers](https://braillerap.readthedocs.io/fr/latest/drivers_mks.html).

Run the application MusicBrailleRAP.exe.


# Instruction for build (Windows)

Environnement Install
=====================

You'll need to have Chrome  installed.

You’ll need to have Python >= 3.6, Eel, pyinstaller, pySerial...


First make a python virtual env in a power shell.
```
$ python -m venv venv 
```

Activate the virtual env (power shell)
```
$ .\venv\Scripts\activate.ps1  
```

Install all python depencies with:
```
$ pip install -r requirement.txt 
```

Install all react/js dependencies
```
$ npm install
```

Develop on React GUI
====================

```
$ yarn start
```

Build as GUI App
================

```
$ yarn build
```

check `dist/MusicBrailleRAP.exe`


