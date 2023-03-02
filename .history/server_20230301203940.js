const express = require('express');
const mongodb = require('mongodb').MongoClient;

//app
const app = express();
const port = 3001;

const connectionStringURI = `mongodb::<password>@socialsocial.prvbbyc.mongodb.net/test`;

let db;

mongodb.connect(
  connectionStringURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db =socialsocial.db();
        app.listen(port, () => {
          console.log(`Example app listening at http://localhost:${port}`);  
        });
  } 
);

app.use(express.json());


//ROUTES

app.post('/create', (req, res) => {
  db.collection('posts collection').insertOne(
    { title: req.body. },
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.get('/history', (req, res) => {
  db.collection('post collection')
    .find()
    .toArray((err, results) => {
      if (err) throw err;
      res.send(results);
    });
});

// To delete an object, the numerical id string must be wrapped with ObjectID()
app.delete('/delete', (req, res) => {
  // Use deleteOne() to delete one object
  db.collection('post collection').deleteOne(
    // This is the filter. We delete only the document that matches the _id provided in the request body,
    { _id: ObjectId(req.body.id) },
    (err, results) => {
      if (err) throw err;
      console.log(results);
      res.send(
        results.deletedCount ? 'Document deleted' : 'No document found!'
      );
    }
  );
});
app.get('/posts',(req,res) =>{
    res.send('This is your post');
});

