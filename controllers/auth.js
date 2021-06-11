const {validateLogin,validateLogup} =require('../utils/validateForm')


module.exports={
    sign:async (req,res,next)=>{
        // res.cookie("becod3r","1234567890",{maxAge:3*60*60*1000})
        // res.json('Bienvenue sur login')
        let isOk=validateLogin(req.body)
        res.json('reponse: '+isOk)
    },
    
    register:async (req,res,next)=>{
        let isOk=validateLogup(req.body)
        res.json('reponse: '+isOk)
    },

    validFormData:(reqBody)=>{
        console.log({...reqBody});
    }

}