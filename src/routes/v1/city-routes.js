const express=require('express');

const {CityController}=require('../../controller')
const {CityMiddlewares}=require('../../middleware')
const router=express.Router()
// /api/v1/cities POST
router.post('/',CityMiddlewares.validateCreateRequest,CityController.createCity);

// /api/v1/cities:id PATCH
router.patch('/:id',CityController.updateCity);

module.exports=router;