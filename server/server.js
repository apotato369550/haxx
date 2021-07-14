// import modules
// research routes
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");


const {
    PORT = 3000,
    NODE_ENV = "development",
    SESSION_NAME = "sid",
    SESSION_LIFETIME = 1000 * 60 * 60 * 2,
    SESSION_SECRET = "be quiet"
} = process.env

const IN_PROD = NODE_ENV === 'production';

app.use(cors());
app.use(express.json());

app.use(session({
    name: SESSION_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookies: {
        maxAge: SESSION_LIFETIME,
        sameSite: true,
        secure: IN_PROD
    }
}))

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "haxx_database"
})

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE username=? AND password=?", 
    [username, password],
    (err, result) => {
        if(err || !result){
            console.log(err);
            return false;
        }
        return true;
    })
})

app.listen(3001, () => {
    console.log("Server is running on port 3001 lmao")
})