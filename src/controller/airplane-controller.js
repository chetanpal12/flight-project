const {StatusCodes}=require('http-status-codes');
const {AirplaneService}=require('../services');
const {ErrorResponce,SuccessResponce}=require('../utils/common')


/**
 * Post: /airplane
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
/**
 * GET: /airplanes/
 * req-body {}
 */
async function getAirplanes(req,res){
    try {
        const airplanes=await AirplaneService.getAirplanes();
        SuccessResponce.data=airplanes;
        return res.status(StatusCodes.OK).json({SuccessResponce});
    } catch (error) {
        ErrorResponce.error=error;
        console.log(error)
        return res.status(error.statusCode).json({ErrorResponce});
    }
}

/**
 * Get: /airplanes/:id
 * req-body {}
 */
async function getAirplane(req,res){
    try {
        const airplanes=await AirplaneService.getAirplane(req.params.id);
        SuccessResponce.data=airplanes;
        return res.status(StatusCodes.OK).json({SuccessResponce});
    } catch (error) {
        ErrorResponce.error=error;
        console.log(error)
        return res.status(error.statusCode).json({ErrorResponce});
    }
}

/**
 * DELETE: /airplanes/:id
 * req-body {}
 */
async function destroyAirplane(req,res){
    try {
        const airplanes=await AirplaneService.destroyAirplane(req.params.id);
        SuccessResponce.data=airplanes;
        return res.status(StatusCodes.OK).json({SuccessResponce});
    } catch (error) {
        ErrorResponce.error=error;
        console.log(error)
        return res.status(error.statusCode).json({ErrorResponce});
    }
}

/**
 * PATCH: /airplane/:id
 * req-body {modelNumber:'airbus320',capacity:200}
 */
async function updateAirplane(req,res){
    try {
        const airplane= await AirplaneService.updateAirplane({
            modelNumber:req.body.modelNumber,
            capacity:req.body.capacity
        },req.params.id);
        SuccessResponce.data=airplane;
        return res.status(StatusCodes.CREATED).json({SuccessResponce})
        
    } catch (error) {
        ErrorResponce.error=error;
        console.log(error)
        return res.status(error.statusCode).json({ErrorResponce});
    }
}

module.exports={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
}