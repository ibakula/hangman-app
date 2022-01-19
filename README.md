## Welcome
This is a front-end application, the ["hangman" game](https://en.wikipedia.org/wiki/Hangman_(game)) made with CRA.
Project includes configuration files for the web server.

## Quick installation
- Clone the repository; eg __cd ~ && git clone https://github.com/ibakula/hangman-app.git__
- Install node and npm; eg __apt-get install node npm__
- cd to the hangman-app directory; eg __cd ~/hangman-app__
- Install all packages: __npm run install__

Steps for running in development (quicker):
- __npm start__
- you can open browser: http://127.0.0.1:3000

Steps for running in production:
- build files __npm run build__
- start the front-end app server by cd-ing into config folder and executing __cd ~/hangman-app && npm install && node main.js__ (I suggest running the server in a screen session)
- open in browser: http://127.0.0.1:81
