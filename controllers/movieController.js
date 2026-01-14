const omdbApiClient = require("../services/api-client");

// GET /api/search?title=batman
async function searchMovies(req, res) {
  //It should get the search term from a query parameter named title (i.e., req.query.title).

  const title = req.query.title;

  //If the title query parameter is missing, it should respond with a 400 Bad Request status

  if (!title) {
    return res.status(400).json({
      error: "Title query parameter is required",
    });
  }

  // You will need to include two query parameters in your request to OMDb: s (for search term); apikey (your key from process.env.OMDB_API_KEY)

  try {
    //Make GET request to OMDb using axios

    const response = await omdbApiClient.get("/", {
      params: {
        s: title,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    //OMDb-specific failure response
    if (response.data.Response === "False") {
      return res.status(404).json({ error: response.data.Error });
    }

    //If the request is successful, send the list of movies back to the client as JSON.

    return res.json(response.data);
  } catch (error) {
    console.error("Error searching movies:", error.message);
    return res.status(500).json({
      error: "Could not search movies",
    });
  }
}

// GET /api/movies/:id
async function getMovieDetails(req, res) {
  // It should get the movie ID from route parameters

  const id = req.params.id;

  try {
    // Make GET request to OMDb using axios

    const response = await omdbApiClient.get("/", {
      params: {
        i: id,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    // Handle OMDb error response
    if (response.data.Response === "False") {
      return res.status(404).json({ error: response.data.Error });
    }

    // Send movie details back as JSON
    return res.json(response.data);
  } catch (error) {
    console.error("Error fetching movie details:", error.message);
    return res.status(500).json({
      error: "Could not fetch movie details",
    });
  }
}

module.exports = {
  searchMovies,
  getMovieDetails,
};
