const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Server!');
})

const userRoutes = require('./routes/router');
app.use('/users', userRoutes)

app.listen(PORT, ()=>{
    console.log('App Listening on Port '+PORT);
})