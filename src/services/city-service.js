const {CityRepository}=require('../repositories');
const AppError=require('../utils/errors/app-error')
const {StatusCodes}=require('http-status-codes')

const cityRepository= new CityRepository();

async function createCity(data){
    try {
        const city=await cityRepository.create(data);
        return city;
    } catch (error) {
        
        if(error.name=='SequelizeValidationError'||error.name=='SequelizeUniqueConstraintError'){
            let explanation=[];
            error.errors.forEach((err)=>{
                explanation.push(err.message);
            })
            
            throw  new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new city object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(data, id){
    try {
        const responce=await cityRepository.update(data,id);
        return responce;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND||error.name=='SequelizeUniqueConstraintError'){
            throw new AppError('The city you requested to update is not present',error.statusCode)
        }
        throw new AppError('Cannot update data of  the city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id){
    try {
        const responce=await cityRepository.destroy(id);
        return responce;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested to delete is not present',error.statusCode)
        }
        throw new AppError('Cannot fetch data of all the cities', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCities(){
    try {
        const city=await cityRepository.getAll();
        return city;
    } catch (error) {
        throw new AppError('Cannot fetch data of all the cities', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCity(id){
    try {
        const city=await cityRepository.get(id);
        return city;
    } catch (error) {
        if(error.statusCode==StatusCodes.NOT_FOUND){
            throw new AppError('The city you requested is not present',error.statusCode)
        }
        throw new AppError('Cannot fetch data of the city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createCity,
    updateCity,
    destroyCity,
    getCities,
    getCity
}