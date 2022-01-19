## Welcome
This is a front-end application, the ["hangman" game](https://en.wikipedia.org/wiki/Hangman_(game)) made with CRA.
Project includes configuration files for the web server.


## Issues
- Highscore and quotes APIs are on a remote server. 
- Since the CORS policy poses an issue for this app, you are compelled to use a reverse proxy. 
- However, this project includes a preconfigured configuration file for a reverse proxy as well as web server configuration file for statically generated files. 
- To use configuration as suggested please follow the quick installation guide.


## Quick installation
The following instructions require you to have sufficient user permissions to install required packages on a Debian-based OS and set everything up.
- Clone the repository; eg __cd /home/{username} && git clone https://github.com/ibakula/hangman-app.git__
- Install node and npm; eg __apt-get install node npm__
- cd to the hangman-app directory; eg __cd /home/{username}/hangman-app__
- auto-configure everything by running __npm run configure__
- start the front-end app server by cd-ing into config folder and executing __node main.js__ (I suggest running the server in a screen session)
- start the reverse proxy by running __systemctl start nginx__


## How to "compile" for a custom setup
If you would like to set the servers entirely by yourself, you can build and copy the files into your html folder.
- Run npm run build - the static files will be in the build folder
- The rest of the configuration is up to you
