const express = require('express');
const cors = require('cors');
const userRecords = require('./data/users.json');
const bodyParser = require('body-parser')
const server = express();

server.use(express.json());
server.use(cors());
server.use(bodyParser.json());

//Get user records 
server.get(`/userdb`,(req,res)=>{
    res.json(userRecords)
})
server.post('/login',(req,res)=>{
    res.json({
        status: 'sucess',
        username,
        email,
    });
})
//post the user data 
server.post(`/userdb`,(req,res)=>{
    const {body} = req;
    const {name,username,email,password} = body;
    const id = (userRecords.length+1).toString();

    const user = {
        id,
        name,
        username,
        email,
        password
    }
    userRecords.push(user);
    res.json(user)
    res.json({
        status:'sucess'
    })
})
//creating a server
server.listen(3001,()=>{
    console.log(`Listening at http://localhost:3001/userdb`)
})