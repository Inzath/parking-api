
const express = require('express');
const parkingController = require('./Controller/parkingController');
const reservationController = require('./Controller/reservationController');

const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});

router.get('/parkings', parkingController.getAllParkings);
  
  //récupération d'un seul parking
router.get('/parkings/:id', parkingController.getOneParkings);

router.post('/parkings', parkingController.postParkings)

router.delete('/parkings/:id', parkingController.deleteParkings)

router.patch('/parkings/:id', parkingController.updateParkings)

router.put('/parkings/:id', parkingController.updateParkings)

router.get('/parkings/:id/reservations/:id',reservationController.getOneReservation);


router.get('/reservations',reservationController.getAllReservation);

router.get('/reservations/:id',reservationController.getOneReservation);

router.post('/reservations',reservationController.postReservation);

router.delete('/reservations/:id',reservationController.deleteReservation);

router.patch('/reservations/:id',reservationController.patchReservation);

router.put('/reservations/:id',reservationController.putReservation);

router.get('/reservations/:id/parkings/:id',parkingController.getParkings);





module.exports = router;