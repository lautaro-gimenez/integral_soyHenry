

export const addFav =(personaje)=>{
return {type:"ADD_FAV", payload: personaje}
}

export const removeFav =(is)=>{
return{type:"REMOVE_FAV", payload: is}
}

export const filterCards =(a)=>{
return{type:'FILTER', payload: a}
}

export const orderCards=(s)=>{
return{ type:'ORDER', payload:s}
}