const express=require('express')

const {infoController}=require('../../controller')
const cityRoutes=require('./city-routes')
const airplaneRoutes=require('./airplane-routes')
const router=express.Router();

router.use('/airplanes',airplaneRoutes)
router.use('/cities',cityRoutes)
router.get('/info',infoController.info)

module.exports=router;