//on doit tout écrire dans server.js puisque c'est la que notre serveur répond
const database = require('./database');
const parkings = require('./parkings.json');
const express = require('express');
const routes = require('./routes.js');

database.connect().then(console.log).catch(console.error)


const app = express();
app.use(express.json())
app.use( routes);







/*
//connection a mongodb
const {MongoClient, ObjectId} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'parkingApi';
const client = new MongoClient(url);

let db
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  db = client.db(dbName);
  return 'done.';
}*/




//Demarrer le serveur
app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})

