const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes");
const url = require("url");

const port = process.env.PORT || 3002;
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(router);

// Static files
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to Quiz App API!');
});

// Start server
app.listen(port, () => {
    console.log(`Express is listening on Port: ${port}`);
});
