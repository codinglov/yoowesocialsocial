const express = require('express');
const mongodb = require('monodb').MongoClient;

//app
const app = express();
const port = 3001;

const connectionStringURI = mongodb:>:<password>@socialsocial.prvbbyc.mongodb.net/test


//ROUTES
app.get('/',(req, res) => {
    res.send('Welcome to we social social');
});

app.get('/posts',(req,res) =>{
    res.send('This is your post');
});

