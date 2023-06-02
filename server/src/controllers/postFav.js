const {Favorite} =require('../DB_connection')

const postFav = async (req,res)=>{

    try {
    let {id,name, origin, status, image, species, gender} = req.body
        
        if (!name ||!origin||!status || !image||!species ||!gender) res.status(401).send('faltan datos en fav');
        await Favorite.findOrCreate({where:{
            id,
            name,
            origin,
            status,
            image,
            species,
            gender
        }})

        
        
        let myFavorites = await Favorite.findAll()
        
         return res.status(200).json(myFavorites)


    } catch (error) {
        res.status(500).send('error fav'+error)
    }
}

module.exports= postFav
