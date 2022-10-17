var mysql = require('mysql');

var connection = mysql.createConnection(
    {
        host:'localhost', 
        user: 'root', 
        password:'Patrick013016',
        database: 'radarchart_nsysu_db'
    }
);

module.exports = connection;