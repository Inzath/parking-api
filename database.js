
const database = {}
database.connect = async () => {
    
 //Importation de MongoClient & connexion à la bdd

    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://localhost:27017';
    const dbName = 'parkingApi';
    let db
    MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to MongoDB Server");
    db = client.db(dbName);
    database.db = db
    });
}

module.exports = database