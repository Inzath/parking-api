const { ObjectId } = require('mongodb')
const connection = require('../database')

const reservation = {}

reservation.All = async function () {
    return await connection.db.collection('reservations').find().toArray()
}

reservation.get = async function (id) {
  return await connection.db.collection('reservations').find({_id : ObjectId(id)}).toArray()
}

reservation.update = async function (id) {
  return await connection.db.collection("reservations").updateOne({ _id: ObjectId(id)  }, { $set: data })
}
reservation.delete = async function (id) {
  return await connection.db.collection("reservations").deleteMany({ _id: ObjectId(id)})
}

reservation.put = async function (data) {
  return await connection.db.collection("reservations").insertOne(data)
}

reservation.post= async function (data) {
  return await connection.db.collection("reservations").insertOne(data)
} 

reservation.patch = async function (id , data) {
  return await connection.db.collection("reservations").updateOne({_id : ObjectId(id)} , {$set: data})
}





module.exports = reservation


