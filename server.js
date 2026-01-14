require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Import routes
const movieRouter = require("./routes/movieRoutes");

// Root route
app.get("/", (req, res) => {
  res.send("Server is alive");
});

//Mount movie routes with /api prefixed
// app.use("/api", movieRouter)

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
