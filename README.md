# nodejs-tutorial
Learning nodejs with express to create backend apps

I'm following the tutorial by freecodecamp to build a server side application using REST api best practices. The application is a REST api for a workout program in which a user can create, read, update and delete a workout.

I'm following a 3 layer architecture for the backend architecture:
1. Controller - handles HTTP requests passed from Router(Express).
2. Service Layer - contains the business logic that exports methods to controller
3. Data Access Layer - interacts with the database. (Simple JSON file to mimic a database)

PROJECT SETUP:
1. Run "npm init -y" to create package.json 
2. Create subfolders controllers, routes, services, database inside src folder. (To keep the code separate for each layer).
3. Create index.js inside src folder as an entry point to the api.
4. Install "nodemon (npm install -D nodemon)" to run the server continuosly on code changes.
5. Install express and configure in index.js
