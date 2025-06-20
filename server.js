const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/", urlRoute);

connectToMongoDB("mongodb://localhost:27017/url-shortener")
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((err) => console.error("MongoDB connection error:", err));
