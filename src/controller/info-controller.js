const {statuscode}=require('http-status-code')
const info=(req,res)=>{
    return res.status(200).json({
        success:true,
        message:'Api is live',
        data:{},
        error:{}
    })
}

module.exports={
    info
}
