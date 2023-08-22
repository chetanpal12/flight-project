const {StatusCodes}=require('http-status-codes');
const {CityService}=require('../services');
const {ErrorResponce,SuccessResponce}=require('../utils/common')


/**
 * POST: /cities
 * req-body {Name:'london'}
 */
async function createCity(req,res){
    try {
        const city= await CityService.createCity({
            name:req.body.name
        });
        SuccessResponce.data=city;
        return res.status(StatusCodes.CREATED).json({SuccessResponce})
        
    } catch (error) {
        ErrorResponce.error=error;
        console.log(error)
        return res.status(error.statusCode).json({ErrorResponce});
    }
}

/**
 * PATCH: /cities/:id
 * req-body {name: 'London'}
 */
async function updateCity(req,res){
    try {
        const city= await CityService.updateCity({
            name:req.body.name
        },req.params.id);
        SuccessResponce.data=city;
        return res.status(StatusCodes.CREATED).json({SuccessResponce})
        
    } catch (error) {
        ErrorResponce.error=error;
        console.log(error)
        return res.status(error.statusCode).json({ErrorResponce});
    }
}


module.exports={
    createCity,
    updateCity
}