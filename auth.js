require('dotenv').config();
const express =require('express');
const req = require('express/lib/request');
const app = express()
const jwt = require('jsonwebtoken');
const axios = require('axios')

app.use(express.json());


app.post('/api/login', (req,res)=> {

//authentication of user here

const username = req.body.username
const user = { name: username}
const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
res.json({
    accessToken: accessToken
})
})
// function authenticateToken(res,req,next) {
//     const authHeader = req.headers['authorization']
//     const token = authHeader && authHeader.split(' ')[1]
    

// }
function generateToken(){
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET), {}
}


app.listen(5001)