# express-recipes

## Description

This is a simple beautiful RESTful API with Express. I simply set this reppository up for me to showcase my very first understanding of RESTful API with Express that was in my local machine 3 years ago which I just pushed to Github. Ooops :D I should have done this sooner. 

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


