const { logger } = require("../config");

class CrudRepository{
    constructor(model){
        this.model=model;
    }

    async create(data){
        const responce=await this.model.create(data);
        return responce;
    }

    async destroy(data){
        try {
            const responce=await this.model.destroy({
                where: {
                    id:data
                }
            });
            return responce;
        } catch (error) {
            logger.error('something went wrong in the crud repo : destroy');
            throw error;
            
        }
    }

    async get(data){
        try {
            const responce=await this.model.findByPk(data);
            return responce;
        } catch (error) {
            logger.error('something went wrong in the crud repo : get');
            throw error;
            
        }
    }

    async getall(data){
        try {
            const responce=await this.model.findAll();
            return responce;
        } catch (error) {
            logger.error('something went wrong in the crud repo : getall');
            throw error;
            
        }
    }

    async update(id, data){
        try {
            const responce=await this.model.create(data,{
                where:{
                    id:id
                }
            });
            return responce;
        } catch (error) {
            logger.error('something went wrong in the crud repo : create');
            throw error;
            
        }
    }
}

module.exports=CrudRepository;