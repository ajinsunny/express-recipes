# express-recipes

This is a full-stack web application that allows users to search and save their favorite recipes. The front-end is built using React, and the back-end is powered by Express and a MongoDB database.

Features
--------

-   Search for recipes using the Edamam Recipe Search API
-   Save recipes to a MongoDB database for later viewing
-   View saved recipes and delete them if desired

Getting Started
---------------

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   Node.js and npm (the Node Package Manager)
-   A MongoDB database (you can use a cloud-based service such as MongoDB Atlas or set up your own local instance)

### Installation

Clone the repository to your local machine:



`git clone https://github.com/ajinsunny/express-recipes.git`

Navigate to the directory where you cloned the repository:

`cd express-recipes`

 Install the required packages:


`npm install`

Create a `.env` file in the root directory of the project and add the following line to it, replacing the placeholder text with your own MongoDB URI:

`MONGODB_URI=<your-mongodb-uri>`


Start the development server:

`npm start`

The application should now be running at `http://localhost:3000`.

Built With
----------

-   [React](https://reactjs.org/) - JavaScript library for building user interfaces
-   [Express](https://expressjs.com/) - Node.js framework for building back-end applications
-   [MongoDB](https://www.mongodb.com/) - NoSQL database for storing data

License
-------

This project is licensed under the MIT License - see the [LICENSE](https://chat.openai.com/chat/LICENSE) file for details. 

The source for this project consists of
  - controllers. 
  - routers. 
  - services
  - middleware
  - public
  - utils

### controllers

The controller for a given resource defines the logic for handling each route and is responsible for manipulating the state of a resource in the API. They also send back a response (either successful or not) to the client.

### routers

The router for a given resource is responsible for routing requests to the appropriate controller based on the URL.

### services

The service encapsulates or groups together the functions that perform a specific category of tasks in an application, like making CRUD transactions for a given resource. Services make code DRY (don’t repeat yourself principle) because the functions defined in a service can be reused throughout the application.

### middleware
Middleware functions are those that alter the request (req) and response (res) objects in the request-response cycle of an application.

Middleware functions should accept three parameters: req, res, and next. They’re executed in a specific order. When the current middleware function is done, it passes control to the next middleware function in the stack by calling next().

### public 

These are public assets such as HTML, CSS, Images and other JS files required to run the application. 

### utils

Utils are the utility files to maintain the errors that the program would incur during the execution of the applcation. 


