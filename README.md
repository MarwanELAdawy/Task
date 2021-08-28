
User Registration & authentication
Node Token-based Authentication REST APIs  using JSON web token.
## Authentication REST APIs
* POST (sign-in)	      **/users/login**                 // Gives back a token
* POST (sign-up)	      **/users/register**
* GET (user profile)	  **/users/profile/id**            // Needs json web token to authorize

Start Node Server
- Run `npm install` to install required packages 
- Open terminal run `nodemon`
- Open other terminal run `mongod` or open mongo DB Compass
 Open API URL on [http://localhost:3000/api](http://localhost:3000/users) on postman 
 The diagram shows flow of how we implement User Registration, User Login and Authorization process.
 
