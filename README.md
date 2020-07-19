# WanderFull

A social media app that encourages users to share their endless amounts of travel photos and favorite foods. App allows users to interact with their friends on a responsive UI, where they can share/view/like posts, and search for posts by hashtag or location.

Built with React.js, Node.js with Express, PostgreSQL, and Material UI.

![signuppage](./assets/signuppage.png)
![homepage](./assets/homepage.png)


## Features

Users are able to:

* Sign up for an account.
* Create a post with a photo, caption, and hashtags.
* Add a like to a post.
* Search for posts by location or hashtags. 

## Technologies Used

* React.js. For the front-end/client interface of our app.
* CSS3 & Material UI. For the styling of our app.
* Node.js & Express.js. For the HTTP backend server.
* PostgreSQL. As our relation database management system.
* Passport.js. For handling user authentication and authorization.
* pg-promise. For interfacing with our database in our backend code.
* bcrypt. For hashing and salting passwords before storage.
* Google maps API. To display map of locations visited.


## Technical milestones 

* Using Google maps API to display map of locations visited.
* Using SQL Queries to search for posts by hashtag or location.
* Integrating user authentication with Passport.js, securely storing passwords and allowing for cookie-based authorization.


##  Local Setup

You must have installed Node.js and PostgreSQL in your computer.

You can check for these dependencies with node -v and psql -v. If your shell/terminal doesn't complain and you see version numbers you are good to go.

1. Clone this repo: 
  
   git clone https://github.com/tbriany/WanderFull.git

2. Install dependencies for the Node/Express Server (back-end folder):

   cd back-end && npm install

3. Install dependencies the React App (frontend folder):

   cd front-end && npm install

4. Create database and seed sample data while being in the server directory with:
 
   psql -f ./back-end/database/seed.sql
   Make sure PostgreSQL is running!

5. To launch the Node/Express server, inside the backend folder run:
 
   npm run start:dev
 
6. To launch the React App, inside the frontend folder, and preferably in another terminal window run:
 
   npm start
 
A new browser tab should have been opened and the App should be running. If that is not the case check the terminals output for errors, if you are unable to troubleshoot the problem, I would be happy to address issues so open one
