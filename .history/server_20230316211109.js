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
    app.listen(port, () =>)
  }  
)
