const {User} = require('../DB_connection')


const postUser = async(req,res)=>{
    try {
        let {email, password}=req.body
        
        if (!email || !password) {
            res.status(400).send('faltan datos')
        }
       const usuario= await User.findOrCreate({ where:{email:email,password:password}})
       console.log(usuario)
        res.status(200).json(usuario)
    } catch (error) {
        console.log(error)
       return res.status(500).send(error)
       
    }


}
module.exports=postUser