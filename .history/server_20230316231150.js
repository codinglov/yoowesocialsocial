const express = require('express');

const mongodb = require('mongodb').MongoClient;

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017/yoowesocialsocial`;

let db;

mongodb.connect(
  
  connectionStringURI,
  { useNewUrlParser: true,
     useUnifiedTopology: true },  
  (err, client) => {

    db = client.db();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }  
);

app.use(express.json());

app.post('/create', (req, res) => {

 db.collection('Usernames').insertOne(
   { First: req.body.First, last: req.body.last },
   
   (err, results) => {
     if (err) throw err;
     res.json(results);
   }
  );   
});

app.post('/create-many', function (req, res) {
  db.collection('Usernames').insertMany(
    [
       {"first" : "laura"},
       {"first": "Anne"} 
       {"first": "John"}
    ],
    
  );
});