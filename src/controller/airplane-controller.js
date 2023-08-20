const {StatusCodes}=require('http-status-codes');
const {AirplaneService}=require('../services');
const {ErrorResponce,SuccessResponce}=require('../utils/common')


/**
 * POST: /airplane
 * req-body {modelNumber:'airbus320',capacity:200}
 */
async function createAirplane(req,res){
    try {
        const airplane= await AirplaneService.createAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        });
        SuccessResponce.data=airplane;
        return res.status(StatusCodes.CREATED).json({SuccessResponce})
        
    } catch (error) {
        ErrorResponce.error=error;
        console.log(error)
        return res.status(error.statusCode).json({ErrorResponce});
    }
}

module.exports={
    createAirplane
}