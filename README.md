# Hire-without-borders
Advanced Computer Lab Project

# install dependencies for backend
npm i

# run backend
node server 

# install dependencies for frontend
cd client
npm i

# run frontend
npm start

# build docker file 
docker build -t myapp

# run docker container
docker run myapp

# backend dependencies
# express
uses a callback function whose parameters are request and response objects (server)
# mongo
for database usage
# joi
uses schemas to define validation rules and constraints for data.
# moment
removes the need to use the native JavaScript Date object directly
# socket.io 
# bcryptjs
# cors
# react
# styled-components


Dependencies/Libraries used and their versions:

1. "bcryptjs": "^2.4.3"
   We used bcryptjs library to hash and compare the passwords in Node.

2. "cors": "^2.8.5"
   CORS is a node.js package which we used for providing a Connect/Express middleware that can be used to enable CORS with various options.

3. "express": "^4.16.4"
   Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. 
   We used express.Router to create modular, mountable route handlers. A Router instance is a complete middleware and routing system.

4. "joi": "^14.3.1"
   We used Joi library for data validation.

5. "mongoose": "^5.4.15"
   We used Mongoose to provide a straight-forward, schema-based solution to model your application data. 

6. "react": "^16.8.6"
  The JavaScript library used for building the user interface.

7. "react-bootstrap": "^1.0.0-beta.6"
  React-Bootstrap is a library with a complete re-implementation of Bootstrap components using React. 
  It has no dependency on bootstrap.js   or jQuery It is used in building the user interface.
  
8. "react-dom": "^16.8.6",
  ReactDOM is a library for web apps that lets you manipulate DOM, just like jquery but in react style. Used to enable the import of render to show our
  components on DOM. 
  React DOM is the glue between React and the DOM. When u want to show your react component on DOM u need to use this ReactDOM.render(); from React Dom.

9. "store": "^2.0.12"
  Library used for store and retrieval of token.

10. "jsonwebtoken": "^8.5.0"
  Used  for creating JSON-based access tokens.

11. "axios": "^0.18.0"
  Used with React to Make API Requests 
  
12. "firebase": "^7.5.2"
  Firebase Auth is a service that can authenticate users using only client-side code. We used it to support login using Google.

13. "react-router-dom":"^"
  Used for DOM bindings for React Router.

14."react-scripts": "^2.1.8"
  react-scripts is a set of scripts from the create-react-app starter pack. We used react-scripts to sets up the project. 
  It sets up the development environment and starts a server, as well as hot module reloading.

15."semantic-ui-react": "^0.88.1"
  Used to provide React components.