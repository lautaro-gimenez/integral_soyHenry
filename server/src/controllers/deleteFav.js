const{Favorite} = require('../DB_connection')

const deleteFav = async (req,res)=>{
try {
    let {id} = req.params
    
    Favorite.destroy({where:{id:id}})
    const favoritos = await Favorite.findAll()
    return res.status(200).json(favoritos)

} catch (error) {
    return res.status(500).send(error)
}

}
module.exports=deleteFav