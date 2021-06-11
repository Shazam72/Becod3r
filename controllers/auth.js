module.exports={

    sign:async (req,res,next)=>{
        res.cookie("becod3r","1234567890",{maxAge:3*60*60*1000})
        res.json('Bienvenue sur login')
    },
    
    register:async (req,res,next)=>{
        console.log(req.body);
    },

    validFormData:(reqBody)=>{
        console.log({...reqBody});
    }

}