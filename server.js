require("dotenv").config(); // load environment variables

const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url"); // make sure the folder is named "routes"

const app = express();
const PORT = process.env.PORT || 8000;

// Connect to MongoDB using environment variable
connectToMongoDB(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.json());

// Routes
app.use("/url", urlRoute);

// Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
