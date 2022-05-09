# nodejs-tutorial
Learning nodejs with express to create backend apps

I'm following the tutorial by freecodecamp to build a server side application using REST api best practices. The application is a REST api for a workout program in which a user can create, read, update and delete a workout.

I'm following a 3 layer architecture for the backend architecture:
1. Controller - handles HTTP requests passed from Router(Express). Contains methods to be used as callback in routes.
2. Service Layer - contains the business logic that exports methods to controller
3. Data Access Layer - interacts with the database. (Simple JSON file to mimic a database)

PROJECT SETUP:
1. Run "npm init -y" to create package.json 
2. Create subfolders controllers, routes, services, database inside src folder. (To keep the code separate for each layer).
3. Create index.js inside src folder as an entry point to the api.
4. Install "nodemon (npm install -D nodemon)" to run the server continuosly on code changes.
5. Install express and configure in index.js

VERSIONING: 
Next, we create separate versions our api, so that we can work on one version while the other one is still in use. We do that by creating subfolders (v1,v2) for each version inside the src directory. We can the add path segment v1 or v2 in the URL. 

We create separate api routes for both versions by having routers subfolders in each version.

Since we'll be using different controllers and services for the api, it's best to have these subfolders inside separate version subfolders.

[Note: This project is a basic project, so we can keep the controllers and services as common for both versions.]

ROUTES:
Inside the v1/routes/workoutRoutes, we create routes/endpoints for each request (get, post, put, delete) to perform CRUD operations and and call a method associated with each endpoint from the controller(v1/controllers/workoutController).

CONTROLLER:
We create a method for each endpoint inside the controller. (With this we finish the first layer of our application)

SERVICE LAYER:
Next, we create our service layer where our business logic is stored. Here, we use JSON format (standard) to accept and respond with data.

[Note: It's best practice to name the service methods the same as controller methods]


