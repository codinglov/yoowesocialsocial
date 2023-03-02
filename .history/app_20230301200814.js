const express = require('express');

const app = express();
const mongodb = require('monodb').MongoClient;
const port = 3001;


//ROUTES
app.get('/',(req, res) => {
    res.send('Welcome to we social social');
});

app.get('/posts',(req,res) =>{
    res.send('This is your post');
});


//HOW WE START LISTENING TO SERVER
app.listen(3002)