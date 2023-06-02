const express = require('express')
const server = express()
const PORT = 3001
const router= require('../src/routes/index')

const { conn } = require('./DB_connection');

server.use(express.json())
// server.use('/',(req,res,next)=>{
//     const modifiedRoute = req.originalUrl + '/rickandmorty';
//     req.url = modifiedRoute;
//     next()
// })
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

server.use('/rickandmorty',router)



server.listen(PORT, ()=> {
    console.log('server raised in port: ' + PORT)
    conn.sync({force:false})
    .then(()=>{
        console.log('base de datos sincronizada')
    }).catch((error)=>{
        console.log('error en la base de datos '+ error)
    })
});