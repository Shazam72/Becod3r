const jwt=require('jsonwebtoken')


module.exports={

    generateToken:(token)=>{
        return jwt.sign({
            app:"Becod3r",
            type:'public', 
        },
            token
        ,{
            expiresIn:2*60*60*100,
        })
    }
}