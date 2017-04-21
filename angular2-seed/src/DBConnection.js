var express = require('express');
var app = express();
var mysql = require("mysql");

var cors = require('cors');    // CORS enabled on server level.

//const bodyParser = require('body-parser');
app.use(cors());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use(function (req, res, next) {    
    //console.log(req.body) // populated!
    next();
})

// config for your database
var config = {
    host        : 'localhost',
    port        : 3306,
    user        : 'root',
    password    : 'cybage@123',
    database    : 'MyProjectDB'
};

var connection = mysql.createConnection(config);
connection.connect();

//app.user(bodyParser.json());
// after the code that uses bodyParser and other cool stuff
var originsWhitelist = [
    //     'http://localhost:4000', //this is my front-end url for development
    //     'http://www.myproductionurl.com'
    "*" //Will Allow all client's request
];

app.get('/getAll', function(req, res) {
    sql = "SELECT * FROM loginInformation";
    connection.query(sql , function(err, result){
        if(err) {
        console.log(err);
    } else {
        console.log(result);
        res.send(result);
        
    }
    })
    
});

app.get('/getRole', function(req, res) {

    // fetch data of url string using request.query.username
    console.log("inside method");
    sql = "SELECT Role FROM `loginInformation` WHERE `userName`='" +"request.quert.username" + "' AND `password`='" + "request.query.password" + "'";
    connection.query(sql , function(err, result){
        if(err) {
        console.log(err);
    } else {
        console.log(result);
        res.send(result);
        
    }
    })
    
});

var server = app.listen(4000, function() {
    console.log('App listening on port 4000');

});

