# Facebook App

This web application would integrate Facebook’s developer API in order to request basic information about a user via their profile. The user would have to authorise this application with permission to access the defined user credentials. After being approved access, the application would request details such as the account number, first and last name, email, profile picture etc. The app would then provide the ability for the user to manipulate their profile in a HTML canvas.


## Requirements
- [Node & npm] (http://www.nodejs.org)
- [Mongodb] (http://www.mongodb.org) server running


## Run Configuration
1. Install packages: `npm install`
2. Change the dbConfig (to your database location) in app.js
3. Launch the app: `npm start`
4. Visit your browser at: `http:localhost:3000`


## Technologies Used
* Vagrant
* NodeJS
* ExpressJS
* MongoDB
* Facebook API
