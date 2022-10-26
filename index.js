express = require('express');

var app = express();

// set port, listen for requests

const PORT = 8080;
app.listen ( PORT, () => {
    console.log('server is running on port ${port}.')

});
app.get('/',function (req,res){
    res.send('<h1>HELLO WORLD FOR 2011CS010123 ');
})