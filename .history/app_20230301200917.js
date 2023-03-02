const express = require('express');
const mongodb = require('monodb').MongoClient;


const app = express();
const port = 3001;


//ROUTES
app.get('/',(req, res) => {
    res.send('Welcome to we social social');
});

app.get('/posts',(req,res) =>{
    res.send('This is your post');
});

