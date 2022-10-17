const mysql = require('mysql');
const express = require('express');
//const db = require('./db')
const app = express();
const port = 3000;
// const connection = require("./database");
const path = require("path");



app.set('view-engine')
// app.use(express.static('public'));
// app.use(express.urlencoded({ extended: true }));

// var con = mysql.createConnection(
//     {
//         host:'localhost', 
//         user: 'root', 
//         password:'',
//         database: 'radarchart_nsysu_db',
//         port:'3306'
//     }
// );

app.get('/', function (req, res) {
    res.render('index.ejs');
});

var connection = mysql.createConnection(
    {
        host:"localhost", 
        database: "radarchart_nsysu_db",
        user: "root", 
        password:"Patrick013016",
    }
);

const bodyParser = require('body-parser');
//const { config } = require('dotenv');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

connection.connect();
app.post('/',function(req, res){
var question1_1 = req.body.question1_1;
var question1_2 = req.body.question1_2;
var question1_3 = req.body.question1_3;
var question2_1 = req.body.question2_1;
var question2_2 = req.body.question2_2;
var question2_3 = req.body.question2_3;
var question3_1 = req.body.question3_1;
var question3_2 = req.body.question3_2;
var question3_3 = req.body.question3_3;
var question4_1 = req.body.question4_1;
var question4_2 = req.body.question4_2;
var question4_3 = req.body.question4_3;
var question5_1 = req.body.question5_1;
var question5_2 = req.body.question5_2;
var question5_3 = req.body.question5_3;

var avg1 = (question1_1 + question1_2 + question1_3)/3;
var avg2 = (question2_1 + question2_2 + question2_3)/3;
var avg3 = (question3_1 + question3_2 + question3_3)/3;
var avg4 = (question4_1 + question4_2 + question4_3)/3;
var avg5 = (question5_1 + question5_2 + question5_3)/3;

connection.query(
    "INSERT INTO table_visitor (theme01_1, theme01_2, theme01_3, theme01_4, theme01_5) VALUES(?, ?, ?, ?, ?);",
    [avg1, avg2, avg3, avg4, avg5],
    function (error, result) {
      if (error) {
        // Throw your error output here.
        console.log("An error occurred.");
      } else {
        // Throw a success message here.
        console.log("1 record successfully inserted into db");
      }
    }
);
});
app.get('/', function (req, res) {
    res.render('index.ejs');
    //res.sendFile(path.join(__dirname, "views", "index.ejs"));
    // con.connect(function (error) {
    //   if (error) {
    //     console.log("Error");
    //   } else {
    //     console.log("MySql DataBase Connected");
        
    //   }
    // });
// con.query("select * from average", function (error, rows) {
//   if (error) {
//     console.log("error");
//   } else {
//     console.log("success");
//     console.log(rows[0]);
//   }
// });
});

// app.post('/',function(req, res){
//     // console.log(req.body);
//     var question1_1 = req.body.question1_1;
//     var question1_2 = req.body.question1_2;
//     var question1_3 = req.body.question1_3;
//     var question2_1 = req.body.question2_1;
//     var question2_2 = req.body.question2_2;
//     var question2_3 = req.body.question2_3;
//     var question3_1 = req.body.question3_1;
//     var question3_2 = req.body.question3_2;
//     var question3_3 = req.body.question3_3;
//     var question4_1 = req.body.question4_1;
//     var question4_2 = req.body.question4_2;
//     var question4_3 = req.body.question4_3;
//     var question5_1 = req.body.question5_1;
//     var question5_2 = req.body.question5_2;
//     var question5_3 = req.body.question5_3;

//     var avg1 = (question1_1 + question1_2 + question1_3)/3;
//     var avg2 = (question2_1 + question2_2 + question2_3)/3;
//     var avg3 = (question3_1 + question3_2 + question3_3)/3;
//     var avg4 = (question4_1 + question4_2 + question4_3)/3;
//     var avg5 = (question5_1 + question5_2 + question5_3)/3;

//     // con.connect(function(error){
//     //     if (error) throw error;

//     //     var sql = `INSERT INTO table_visitor(theme01_1, theme01_2, theme01_3, theme01_4, theme01_5) VALUES(?,?,?,?,?)`;
//     //     con.query(sql,[avg1,avg2,avg3,avg4,avg5] , function(error, result){
//     //         if (error) {
//     //             // Throw your error output here.
//     //             console.log("An error occurred.");
//     //         } else {
//     //             // Throw a success message here.
//     //             console.log("1 record successfully inserted into db");
//     //         }
//     //     });
//     // });
//     //con.connect();
//     // con.connect(function (error) {
//     //     if (error) {
//     //       console.log("Error");
//     //     } else {
//     //       console.log("MySql DataBase Connected");
          
//     //     }
//     //   });
//     connection.query(
//         "INSERT INTO table_visitor (theme01_1, theme01_2, theme01_3, theme01_4, theme01_5) VALUES(?, ?, ?, ?, ?);",
//         [avg1, avg2, avg3, avg4, avg5],
//         function (error, result) {
//           if (error) {
//             // Throw your error output here.
//             console.log("An error occurred.");
//           } else {
//             // Throw a success message here.
//             console.log("1 record successfully inserted into db");
//           }
//         }
//       );
// })

app.get('/page2', (req, res) => {
    res.render('page2.ejs');
});
app.get('/result', (req, res) => {
    res.render('result_page.ejs');
});

//使用靜態資源
//app.use(express.static(__dirname + '/public'));
//app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`radarchart listening on port ${port}`)
    // connection.connect(function (error) {
    //     if (error) {
    //       console.log("Error");
    //     } else {
    //       console.log("MySql DataBase Connected");
          
    //     }
    // });
});
