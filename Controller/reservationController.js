const parking = require('../Model/parking')
const reservation = require('../Model/reservation')
const reservationController = {}

reservationController.getAllReservation = async (req,res)=> {
    try {
        const docs = await reservation.All()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

reservationController.postReservation = async (req,res)=> {
    try {
        const docs = await reservation.post( req.body) 
          res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

reservationController.getOneReservation = async (req,res)=> {
   const id = req.params.id
    try {
        const docs = await reservation.get( id,req.body)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

reservationController.putReservation = async (req,res)=> {
    try {
        const docs = reservation.put(req.body)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

reservationController.updateReservation = async (req,res)=> {
    try {
        const docs = await reservation.update(id ,req.body)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

reservationController.deleteReservation = async (req,res)=> {
    const id = req.params.id
    try {
        const deleteResult = await reservation.delete(id)
        res.status(200).json(deleteResult)
    } catch (err) {
        console.log(err)
        throw err
    }
}

reservationController.patchReservation = async (req,res)=> {
    const id = req.params.id
    try {
        const updateResult = await reservation.patch(id, req.body)
        res.status(200).json(updateResult)
    } catch (err) {
        console.log(err)
        throw err
    }
}



module.exports = reservationController