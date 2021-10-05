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

app.get('/api/canada', (req, res) =>{
    //call to db 
    //return dummy data 
    const canada = ["Canada is bigger than the European Union", "Canada’s lowest recorded temperature is as cold as Mars", "There are more lakes here than anywhere else in the world", "Canada has the world’s longest coastline",
    "Canada has 10 per cent of the world’s forests", "Canada has the only walled city in North America","Canada has six times more oil than Russia", "Canada’s national parks are bigger than most countries", 
    "Canada has North America’s strongest current", "Nunavut, is the world’s northernmost settlement"];
    //sending a response should be in JSON
    res.send(JSON.stringify(canada));
});


app.get('/api/fruits', (req, res) =>{
    //call to db 
    //return dummy data 
    const fruits = ["Apples, peaches and raspberries are all members of the rose family.", "Pumpkins and avocados are fruits not a vegetable.", "TApples float in water because they are 25% air", "A half-cup of figs has as much calcium as a half-cup of milk.",
    " Green fruits help make your bones and teeth strong.", "Not all oranges are in fact orange","Apples give you more energy than coffee", "Each pineapple plant only produces one pineapple per year", 
    "Bananas have a natural antacid effect in the body, so if you suffer from heartburn, try eating a banana for soothing relief.", "A strawberry isn’t an actual berry, but a banana is!"];
    //sending a response should be in JSON
    res.send(JSON.stringify(fruits));
});

// running the express http server on the port we specified
app.listen(port, () => {
    console.log("Listening on this port", port);
});
