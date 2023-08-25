const express=require('express')

const {infoController}=require('../../controller')
const cityRoutes=require('./city-routes')
const airplaneRoutes=require('./airplane-routes')
const airportRoutes=require('./airport-routes')
const flightRoutes=require('./flight-routes')
const router=express.Router();

router.use('/airplanes',airplaneRoutes)
router.use('/airports',airportRoutes)
router.use('/cities',cityRoutes)
router.use('/flights',flightRoutes)

router.get('/info',infoController.info)

module.exports=router;