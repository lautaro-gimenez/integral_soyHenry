const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"
const getCharById   = async (req, res)=>{
   let {id} = req.params
try{
   const respuesta =await axios.get(URL+ id)
   
    return res.json(respuesta.data);

   }catch(error) {
   res.status(404).json(error +'Not fount');
   };
}

module.exports=getCharById