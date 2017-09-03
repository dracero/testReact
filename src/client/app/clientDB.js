
var express = require('express')
var app = express()
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "moodle"   
});
var notes = [];
con.connect();

app.get('/', function (req, res) {
 con.query('SELECT email FROM mdl_user')
            .on('result', function(data){
                // Push results onto the notes array
                notes.push(data);
                
            })
            .on('end', function(){
               // Only emit notes after query has been completed
                res.send(notes)
                notes = [];
            })

  
})

app.listen(3000)

