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
    db =client.db();
        app.listen(port, () => {
          console.log(`Example app listening at http://localhost:${port}`);  
        });
  } 
);

app.use(express.json());


//ROUTES

app.post('/posts',(req,res) => {
  db.co
})
app.get('/posts',(req,res) =>{
    res.send('This is your post');
});

