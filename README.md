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

## How to run unit tests
In order to illustrate the functionality of the "smart" score calculation function, and to convince oneself that the following conditions are met during calculation:
- score of the solution with fewer errors should always be higher than for the solution with
more errors 
- given the same number of errors, solutions with larger numbers of unique letters should be
scored higher
- given the same number of errors and unique letters, longer solutions should be scored higher
- given the same number of errors, unique letters, and quote length, faster solutions should be
scored higher

Steps to run unit testing:
- cd into the project root folder eg __cd ~/hangman-app__
- run __npm test__
- use control keys as displayed by the watcher, eg __"press "a" to run all tests"__

Please note that:
1. If you would like to "extensively" test the smart function calculation, you can do so by editing the function parameters "feed" in the __/src/calculation.test.js__ or creating your own tests.
2. The smart score calculation function has a cap on each arg; quote length, unique letters, errors and duration; 1023, 1023, 1023, 59940000 respectively
   - __My original idea was to use bit masking and "fields" on binary level to create a score system but was abondoned since decimal system was sufficient__
3. There are certain limitations on "low" number parameters, (probably) due to the standard applied in "Numbers" in JS and thence resulting in two scores with low numbers as params calculating as "tied"; though the likeliness of scoring that low is unprobable 
