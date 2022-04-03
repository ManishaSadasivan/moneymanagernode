const express = require('express')
// import MongoClient from 'mongoDB';
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
const app = express()

const mongoURL="mongodb://localhost";
async function createConnection(){

    const client=new MongoClient(mongoURL);
   await client.connect();
   console.log("mongo connection established");
   return client;
   }
   
    const client= await createConnection();
   app.use(express.json());
   
   const Port=4000;
   
app.get('/personalexpense', async function (req, res) {
const personalexpense= await client.db('moneymanager').collection('personalexpense').find().toArray();
res.send(personalexpense)
})

app.listen(4000).consolelog('listening on port')