const express = require("express");
const bodyParser = require('body-parser');

const server = express();

const ticket = require('./routes/ticket');

server.use(express.json());
server.use(express.urlencoded({extended:true}))

// Set routes for being use in API
server.use('/ticket', ticket);

server.get('/', (req,res) => {
    res.send("Server running");
})

server.listen(3000, () => {
    console.log('Server listening on port 3000');
})