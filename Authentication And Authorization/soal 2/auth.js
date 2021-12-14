const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const port = 3000;
app.use(bodyParser.json());

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};
const users = [
  {
    username: "terra",
    password: "password123admin",
    role: "admin",
  },
  {
    username: "dave",
    password: "password123member",
    role: "member",
  },
];
app.use(bodyParser.json());
const accessTokenSecret = "youraccesstokensecret";

app.post("/login", (req, res) => {
    const {username, password} = req.body
    const user = users.find(user => {
        return ((user.username === username) && (user.password === password))
    })

    if(user){
        const token = jwt.sign({username : user.username, role : user.role}, accessTokenSecret)
        res.json({
            accessToken: token
        })
    } else {
        res.send("Username or password incorrect")
    }
})

app.get("/ping", (req, res) => {
  res.send("server jalan");
});

app.listen(port, () => {
  console.log(`Running in port ${port}`);
});