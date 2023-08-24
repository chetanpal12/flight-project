const {StatusCodes}=require('http-status-codes');
const {AirportService}=require('../services');
const {ErrorResponce,SuccessResponce}=require('../utils/common')


/**
 * Post: /airports
 * req-body {name:'',code:'',address:'',cityId:''}
 */
async function createAirport(req,res){
    try {
        const airport= await AirportService.createAirport({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId
        });
        SuccessResponce.data=airport;
        return res.status(StatusCodes.CREATED).json({SuccessResponce})
        
    } catch (error) {
        ErrorResponce.error=error;
        console.log(error)
        return res.status(error.statusCode).json({ErrorResponce});
    }
}
/**
 * GET: /airports/
 * req-body {}
 */
async function getAirports(req,res){
    try {
        const airports=await AirportService.getAirports();
        SuccessResponce.data=airports;
        return res.status(StatusCodes.OK).json({SuccessResponce});
    } catch (error) {
        ErrorResponce.error=error;
        console.log(error)
        return res.status(error.statusCode).json({ErrorResponce});
    }
}

/**
 * Get: /airports/:id
 * req-body {}
 */
async function getAirport(req,res){
    try {
        const airport=await AirportService.getAirport(req.params.id);
        SuccessResponce.data=airport;
        return res.status(StatusCodes.OK).json({SuccessResponce});
    } catch (error) {
        ErrorResponce.error=error;
        console.log(error)
        return res.status(error.statusCode).json({ErrorResponce});
    }
}

/**
 * DELETE: /airports/:id
 * req-body {}
 */
async function destroyAirport(req,res){
    try {
        const airport=await AirportService.destroyAirport(req.params.id);
        SuccessResponce.data=airport;
        return res.status(StatusCodes.OK).json({SuccessResponce});
    } catch (error) {
        ErrorResponce.error=error;
        console.log(error)
        return res.status(error.statusCode).json({ErrorResponce});
    }
}

/**
 * PATCH: /airports/:id
 * req-body {name:'',code:'',address:'',cityId:''}
 */
async function updateAirport(req,res){
    try {
        const airport= await AirportService.updateAirport({
            name:req.body.name,
            code:req.body.code,
            address:req.body.address,
            cityId:req.body.cityId
        },req.params.id);
        SuccessResponce.data=airport;
        return res.status(StatusCodes.CREATED).json({SuccessResponce})
        
    } catch (error) {
        ErrorResponce.error=error;
        console.log(error)
        return res.status(error.statusCode).json({ErrorResponce});
    }
}

module.exports={
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
}