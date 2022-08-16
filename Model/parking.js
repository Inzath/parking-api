const { ObjectId } = require('mongodb')
const connection = require('../database')

const parking = {}

parking.all = async function () {
    return await connection.db.collection('parkings').find({}).toArray()
}

parking.one = async function (id) {
  return await connection.db.collection('parkings').find({_id :ObjectId(id)}).toArray()
}

parking.update = async function (id , data) {
  return await connection.db.collection("parkings").updateOne({ _id : ObjectId(id) }, { $set: data});
}

parking.delete= async function (id , data) {
  return await connection.db.collection('parkings').deleteMany({ _id : ObjectId(id)});
}

parking.insert =  function ( data) {  
  return connection.db.collection("parkings").insertOne(data)
}

parking.get =  function (data) {  
  return connection.db.collection("parkings").find({parkingId : id}).toArray()
}


module.exports = parking



