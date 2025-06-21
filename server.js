const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8001;

const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");

app.use(express.json());
app.use("/", urlRoute);

connectToMongoDB(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });