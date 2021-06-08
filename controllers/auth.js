const validator=require('validator')

module.exports={

    sign:(req,res,next)=>{
        res.cookie("becod3r","1234567890",{maxAge:3*60*60*1000})
        res.json('Bienvenue sur login')
    },
    
    register:(req,res,next)=>{
        console.log('Un appel sur register');
        res.json('Bienvenue sur register')

    }

}