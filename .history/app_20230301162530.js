const express = require('express');
const app = express;

//ROUTES
app.get('/',(req,res) => {
    res.send(Welcome )
})

//HOW WE START LISTENING TO SERVER
app.listen(3000)