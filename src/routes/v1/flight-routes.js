const express=require('express');

const {FlightController}=require('../../controller')
const {FlightMiddlewares}=require('../../middleware')
const router=express.Router()
// /api/v1/flights POST
router.post('/',
            FlightMiddlewares.validateCreateRequest,
            FlightController.createFlight);

// // /api/v1/airports GET
// router.get('/',AirportController.getAirports);

// // /api/v1/airports/:id GET
// router.get('/:id',AirportController.getAirport);

// // /api/v1/airports/:id DELETE
// router.delete('/:id',AirportController.destroyAirport);

// // /api/v1/airports:id PATCH
// router.patch('/:id',AirportController.updateAirport);

module.exports=router;