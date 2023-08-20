const express=require('express');

const {AirplaneController}=require('../../controller')
const {AirplaneMiddlewares}=require('../../middleware')
const router=express.Router()
// /api/v1/airplanes POST
router.post('/',
            AirplaneMiddlewares.validateCreateRequest,
            AirplaneController.createAirplane);

// /api/v1/airplanes GET
router.get('/',AirplaneController.getAirplanes);

module.exports=router;