const express = require('express');
const mongodb = require('monodb').MongoClient;

//app
const app = express();
const port = 3001;

const connectionStringURI = `mongodb:<username>:<password>@socialsocial.prvbbyc.mongodb.net/test`;

let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db =client.db(;
        app.listen(port, ()))
  } 
)


//ROUTES
app.get('/',(req, res) => {
    res.send('Welcome to we social social');
});

app.get('/posts',(req,res) =>{
    res.send('This is your post');
});

