const express = require('express');

const app = express();
const mongo = require('mongoose');
require('dotenv/config');


//ROUTES
app.get('/',(req, res) => {
    res.send('Welcome to we social social');
});

app.get('/posts',(req,res) =>{
    res.send('This is your post');
});


//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('Data Time')
);

//HOW WE START LISTENING TO SERVER
app.listen(3002)