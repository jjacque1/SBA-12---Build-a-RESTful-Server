const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

// Search movies by title
router.get("/search", movieController.searchMovie);

// Get movie details by IMDb ID
router.get("/movies/:id", movieController.movieDetails);

//Export the router.
module.exports = router;
