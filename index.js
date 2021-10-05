// requiring express
const express = require('express');

//initializing the express app
const app = express();

// specifying a port to listen on localhost:9000
const port = 9000;

//API / urls 
app.get('/', (req, res) => {
    res.send("Assignment 1!");
});

// running the express http server on the port we specified
app.listen(port, () => {
    console.log("Listening on this port", port);
});
