const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "fullstack",
    port: "3306"

})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM users";
    db.query(sqlGet, (err, result) =>{
        res.send(result);
    })
})

app.post("/api/post", (req, res) => {
    const {username, email, user_password} = req.body;
    const sqlInsert = 
    `INSERT INTO users (username, email, user_password) values(?, ?, ?)`;
    db.query(sqlInsert, [username, email, user_password], (err, result) => {
        if(err){
            console.log(error);
        }
    })
})

app.delete("/api/remove/:id", (req, res) => {
    const { id } = req.params;
    console.log(id)
    const sqlRemove = 
    'DELETE FROM users WHERE id = ?';
    db.query(sqlRemove, id, (err, result) => {
        if(err){
            console.log("error");
        }
    })
})

app.get("/api/get/:id", (req, res) => {
    const {id} = req.params
    const sqlGet = "SELECT * FROM users WHERE id = ?";
    db.query(sqlGet, id, (err, result) =>{
        if(err) {
            console.log(err);
        }else {

            res.send(result);
        }
    })
})

app.put("/api/update/:id", (req, res) => {
    const { id } = req.params;
    const { username, email, user_password } = req.body;
    const sqlUpdate = `UPDATE users SET username = ?, email = ?, user_password = ? WHERE id = ?`;
    db.query(sqlUpdate, [username, email, user_password, id], (err, result) =>{
        if(err) {
            console.log(err);
        }
        res.send(result);
    })
})

app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})