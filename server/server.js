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
            res.send(result);
        }
    )
})

app.post("/command", (req, res) => {
    const input = req.body.command;
    const tokens = input.split(" ");

    const username = req.body.username;
    const password = req.body.password;
    const userId = req.body.id;

    let response = [];
    if(userId){
        db.query(
            "SELECT * FROM users WHERE username=? AND password=? AND id=?",
            userId,
            (err, result) => {
                if(err){
                    let error = {
                        id: Math.random(),
                        type: "error",
                        text: "An error occured while processing your input"
                    }
                    response.push(error)
                    // fix id and keying system

                    // res.send("An error occured while processing your input");
                    res.send(response);
                    return;
                } else {
                    let error = {
                        id: Math.random(),
                        type: "error",
                        text: "You are not logged in"
                    }
                    response.push(error)

                    // res.send("You are not logged in.");
                    res.send(response)
                    return;
                }
            }
        );
    } 

    let message = {
        id: Math.random(),
        type: "response",
        text: "You are logged in."
    }
    response.push(message)
    // res.write("You are logged in. input: " + input + " Command: " + tokens[0] + " ");

    const command = tokens[0];

    if(command.toLowerCase() == "print"){
        let text = "";
        for(let i = 1; i < tokens.length; i++){
            text += tokens[i];
            if(i <= tokens.length - 1){
                text += " ";
            }
        }
        let print = {
            id: Math.random(),
            type: "print",
            text: text
        }
        response.push(print);
        // res.write(text);
    } else {
        let error = {
            id: Math.random(),
            type: "error",
            text: "Sorry. '" + command + "' is not recognized as a valid command"
        }
        response.push(error)
        // res.write("<br> Sorry. '" + command + "' is not recognized as a valid command")
    }
    // test this
    res.send(response);
    res.end();

    return;
})

app.listen(3001, () => {
    console.log("Server is running on port 3001 lmao")
})