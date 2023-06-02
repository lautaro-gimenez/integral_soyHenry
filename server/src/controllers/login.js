const {User} =require('../DB_connection')

const login = async (req,res)=>{

    try {
        let {email,password}= req.query
        if (!email||!password) {
        return res.status(400).send('faltan datos')
        }
        const user = await User.findOne({where: {email:email}})
        if (!user) res.status(404).send('usuario no encontrado')
        if (!user.password == password) res.status(403).send('contraseña incorrecta')
        res.json({acces:true})
            
        
    } catch (error) {
        return res.status(500).send(error)
    }



}

module.exports=login
