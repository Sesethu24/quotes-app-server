const express = require('express')
const app = express()
const PgPromise = require("pg-promise")
const bcrypt = require('bcrypt')
const cors = require('cors')
app.use(cors())
require('dotenv').config();
const req = require('express/lib/request');
const jwt = require('jsonwebtoken');
const axios = require('axios');
app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
const API = require('./api');

const DATABASE_URL = process.env.DATABASE_URL;
const pgp = PgPromise({});
const db = pgp(DATABASE_URL);

API(app, db);




const users = [{
    username: 'Sesethu24',
    password: 'password'
}]

// app.get('/users',(req,res) => {
     
//     res.json(users)
//  users
// } )
// function authenticateToken(res,req,next) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
//     if (token === null) return res.sendStatus(401);
//     try {
//         jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
//         next()
//     } catch(err) {
//         console.log(err);
//         if (err) return res.sendStatus(403)
//         req.user = user
//         next()
//       }
// }

// app.post('/users', async (req, res) => {
//     try {
//         const salt = await bcrypt.genSalt()
//         const hashedPassword = await bcrypt.hash('password', salt)
//         const user = {
//             name: req.body.username,
//             password: hashedPassword
//         }
//         users.push(user)
//         res.status(201).send()
//         hash(salt + 'password')
//         } 
//       catch {
//         res.status(500).send()
//     }

// })

// app.post('/users/login', async (req, res) => {
//    const user = users.find(user => user.username = req.body.username) 
//    if (user == null) {
//        return res.status(400).send('cannot find user')
//     }
//    try {
//      if(await bcrypt.compare(req.body.password, user.password) ) {
//         // jwt.sign()
//         res.json({
//             token: 'password'
//         })
//      }else{
//          res.send('not allowed')
//      }
    
//    } catch {
//     res.status(500).send()
//    }
    
// })

const port = 4000

app.listen(port, function(){
    console.log(`App running on port:${port}`);
})





