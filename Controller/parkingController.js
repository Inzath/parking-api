const parking = require('../Model/parking')
const parkingController = {}

parkingController.getAllParkings = async (req,res)=> {
    try {
        const docs = await parking.all()
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

parkingController.getOneParkings = async (req,res)=> {
    const id = req.params.id
    try {
        const docs = await parking.one(id)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

parkingController.postParkings = async (req,res)=> {

    try {
        const docs = await parking.insert( req.body)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

parkingController.deleteParkings = async (req,res)=> {
    const id = req.params.id
    try {
        const docs = await parking.delete(id)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

parkingController.patchParkings = async (req,res)=> {
    try {
        const updateResult = await parking.patch(id, req.body)
        res.status(200).json(updateResult)
    } catch (err) {
        console.log(err)
        throw err
    }
}

parkingController.updateParkings = async (req,res)=> {
    const id = req.params.id
    try {
        const docs = await parking.update(id, req.body)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

parkingController.getParkings = async (req,res)=> {
    const parkingId = req.params.id
    try {
        const docs = await parking.update(parkingId, req.body)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}

/*
parkingController.putParkings = async (req,res)=> {
    try {
        const docs = await parking.update( req.body)
        res.status(200).json(docs)
    } catch (err) {
        console.log(err)
        throw err
    }
}
*/


module.exports = parkingController