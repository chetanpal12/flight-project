const express=require('express');

const {ServerConfig,logger}=require('./config');

const apiRoutes=require('./routes')
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api',apiRoutes)

app.listen(ServerConfig.PORT,async ()=>{
    console.log(`successfully started the server on Port: ${ServerConfig.PORT}`);
    const {City,Airport}=require('./models')
    await City.destroy({
        where:{
            id:1
        }
    });
    // const city=await City.findByPk(1);
    // await city.createAirport({name:'london airport',code:'LAN'})

});