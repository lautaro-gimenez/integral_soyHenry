

let myfavorites=[]

const postFav=(req,res)=>{
    myfavorites.push(req.body) 
    return res.status(200).json(myfavorites)
    
}

const deleteFav=(req,res)=>{
    let {id} = req.params
    
     myfavorites =myfavorites.filter((card)=>{
        return card.id !== +id
    })

    return res.status(200).json(myfavorites)
}

module.exports ={
    myfavorites,
    postFav,
    deleteFav
}