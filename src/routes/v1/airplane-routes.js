const express=require('express');

const {AirplaneController}=require('../../controller')
const {AirplaneMiddlewares}=require('../../middleware')
const router=express.Router()

router.post('/',
            AirplaneMiddlewares.validateCreateRequest,
            AirplaneController.createAirplane);
module.exports=router;