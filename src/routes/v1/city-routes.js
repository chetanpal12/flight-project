const express=require('express');

const {CityController}=require('../../controller')
const {AirplaneMiddlewares}=require('../../middleware')
const router=express.Router()
// /api/v1/cities POST
router.post('/',CityController.createCity);



module.exports=router;