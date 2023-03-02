const express = require('express');

const app = express();


//Middlewares kind of restricts stuff for certain routes
app.use('/posts', () => {
    console.log('Whats on your mind today?');
});


//ROUTES
app.get('/',(req, res) => {
    res.send('Welcome to we social social');
});
app.get('/posts',(req,res) =>{
    res.send('This is your post');
});


//HOW WE START LISTENING TO SERVER
app.listen(3001)