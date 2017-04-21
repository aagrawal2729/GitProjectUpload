const mysql = require('mysql');

const config = {
    host        : 'localhost',
    port        : 3306,
    user        : 'root',
    password    : 'cybage@123',
    database    : 'abc'
};

var connection = mysql.createConnection(config);
connection.connect();

connection.query('SELECT count(*) AS count FROM users', function(err, result) {
    if(err) {
        console.log(err);
    } else {
        console.log(result[0].count + ' records present');
    }
});

connection.query('SELECT * FROM users', function(err, result) {
    if(err) {
        console.log(err);
    } else {
        console.log(result[0].firstName);
    }
});

connection.end();

/*
connection.query('INSERT INTO users (firstName, lastName) VALUES ("name1", "name2")', function(err, result) {
    if(err) {
        console.log(err);
    } else {
        console.log(result);
    }
});
*/

"SELECT * FROM `users` WHERE `username`='" + req.params.username + "' AND `password`='" + req.params.password + "'"
