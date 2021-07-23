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
// why is this not working?
app.post("/login", (req, res) => {
    // username and password are undefined here
    // req.body is undefined... figure out why
    // check out the original page
    let username = req.body.username;
    let password = req.body.password;


    console.log("Username: " + username);
    console.log("Password: " + password);

    db.query(
        "SELECT * FROM users WHERE username=? AND password=?",
        ["admin", "1234"],
        (err, result) => {
            if(err || !result){
                console.log(err)
                res.send(false);
            }
            res.send(true);
        }
    )
})

app.post("/command", (req, res) => {
    const command = req.body.command;
    const tokens = command.split(" ");
    const { userId } = req.session;
    // figure out how to set session variables
    if(userId){
        db.query(
            "SELECT * FROM users WHERE id=?",
            userId,
            (err, result) => {
                if(err){
                    return "An error occured while processing your command";
                }
            }
        );
    } else {
        return "You are not logged in.";
    }

    return "You are logged in";
})

app.listen(3001, () => {
    console.log("Server is running on port 3001 lmao")
})