const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
let app = express();
app.use(cors());
app.use(bodyParser.json());
const HOST = 5000;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ramin1998",
  database: "bootcamp",
});

connection.connect((err) => {
  if (!err) {
    console.log("SUCCESS");
  } else {
    console.log(err);
  }
});

connection.query(`CREATE TABLE IF NOT EXISTS users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,  
    username VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);`)


app.get("/users/:id", (req, res) => {
  connection.query(`SELECT * FROM users WHERE user_id = ${req.params.id};`, (err, data) => {
    console.log(data)
    if (data.length > 0 && Array.isArray(data)) {
      res.json(data);
    } else {
      res.json({ error: "THERE ARE NO DATA" });
    }
  });
});

app.get("/users", (req, res) => {
    connection.query(`SELECT * FROM users;`, (err, data) => {
      console.log(data)
      if (data.length > 0 && Array.isArray(data)) {
        res.json(data);
      } else {
        res.json({ error: "THERE ARE NO DATA" });
      }
    });
  });

app.post("/add", (req, res) => {
    let userInfo = req.body
    console.log(userInfo)
    connection.query(`INSERT INTO users (username, email)
    VALUES  ('${userInfo.username}', '${userInfo.email}');`, 
    (err, data) => {
      if(err){
        console.log(err)
      }else{
        console.log(data)
        res.json(data)
      }
    });
  });

  app.delete("/delete/:id", (req, res) => {
    let userId = req.params.id
    connection.query(`DELETE FROM users WHERE user_id = ${userId};`, 
    (err, data) => {
      if(err){
        console.log(err)
      }else{
        console.log(data)
        res.json(data)
      }
    });
  });

  app.put("/change/:id", (req, res) => {
    let userId = req.params.id
    let user = req.body
    connection.query(`UPDATE users SET username = '${user.username}', email = '${user.email}' WHERE user_id = ${userId};`, 
    (err, data) => {
      if(err){
        console.log(err)
      }else{
        console.log(data)
        res.json(data)
      }
    });
  });

app.listen(HOST, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`localhost:${HOST}`);
  }
});
