const express = require('express');

const app = express();


//ROUTES
app.get('/',(req, res) => {
    res.send('Welcome to we social social');
});

app.get('/posts',(req,res) =>{
    res.send('This is your post');
});


//connect to db
mongoose.connect('mongodb+srv://maksboutique9:Kakamega12!@socialsocial.w9zx7ah.mongodb.net/test')

//HOW WE START LISTENING TO SERVER
app.listen(3001)