## Instructions

## Task 1: Get Your API Key

For this assessment, you will use the OMDb (Open Movie Database) API. It’s a free service that provides movie data.

Visit http://www.omdbapi.com/apikey.aspx .
Select the FREE plan.
Enter your email address to have a unique API key sent to you.
You will receive your key via email shortly. Keep it safe.

## Task 2: Project Setup

Create a new project directory (e.g., movie-finder-api).
Initialize a Node.js project: npm init -y.
Install the required dependencies: express, axios, and dotenv.

npm install express axios dotenv
Create a .env file in the root of your project. Store your OMDb API key in it like this:

OMDB_API_KEY=your_key_here
Create a .gitignore file and add node_modules/ and .env to it. This is a critical security step.

## Task 3: Application Structure

Your application must be structured with separate directories for routes and controllers.

Create a server.js file in the root directory. This will be your main entry point.
Create a routes directory. Inside it, create a movieRoutes.js file.
Create a controllers directory. Inside it, create a movieController.js file.

## Task 4: Build the Server (server.js)

In server.js, require and configure dotenv at the very top.
Set up your Express application instance.
The server should listen on a port of your choice (e.g., 3001), logging a message on startup.
Import the routes from ./routes/movieRoutes.js.
Mount your movie routes. All routes related to movies should be prefixed with /api. For example, a /search route in your router file will be accessible at /api/search.

## Task 5: Create the Routes (routes/movieRoutes.js)

Create an express.Router.
Import the controller functions from ../controllers/movieController.js.
Define two routes and associate them with the controller functions:
GET /search: This will handle movie searches.
GET /movies/:id: This will fetch details for a specific movie.
Export the router.

## Task 6: Implement Controller Logic (controllers/movieController.js)

This is where the main logic of your application will live.

searchMovies function:

This function will handle the GET /api/search route.
It should get the search term from a query parameter named title (i.e., req.query.title).
Validation: If the title query parameter is missing, it should respond with a 400 Bad Request status and a JSON error message like { "error": "Title query parameter is required" }.
It should make a GET request to the OMDb API using axios. The base URL is http://www.omdbapi.com/. You will need to include two query parameters in your request to OMDb:
s (for search term)
apikey (your key from process.env.OMDB_API_KEY)
If the request is successful, send the list of movies back to the client as JSON.
Implement try...catch for error handling.
getMovieDetails function:

This function will handle the GET /api/movies/:id route.
It should get the movie’s IMDb ID from the route parameters (req.params.id).
It should make a GET request to the OMDb API. This time, you will need to include two query parameters:
i (for IMDb ID)
apikey
If the request is successful, send the detailed movie data back to the client as JSON.
Implement try...catch for error handling.
