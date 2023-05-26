const users= require('../utils/users')

const log = (req, res)=>{
    let {email,password}= req.query
    let userfound= users.find((user)=>user.email==email&&user.password==password)
    if (userfound) {
        return res.status(200).json({acces:true}) ;
    }else{
        return res.status(404).json({acces:false})
    }
}

module.exports= log