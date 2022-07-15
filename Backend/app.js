const express = require('express');
const TestimonyData = require('./src/model/Testimonydata');
const cors = require('cors');
var app = new express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/testimony',function(req,res){
    res.header("Access-Control-Allow-origin","*");
    res.header("Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS"); 
    TestimonyData.find()
                .then(function(umessages){
                    res.send(umessages);
                });
});

app.listen(3000, function(){
    console.log('listening to port 3000');
});