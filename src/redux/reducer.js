import { removeFav, addFav } from "./actions"
let initialState ={
    myFavorites :[],
    allCharacters:[]
}

export const reducer =(state = initialState, action)=>{
    console.log( state)
    switch (action.type) {
        case 'ADD_FAV':
      return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        
      case 'REMOVE_FAV':
        return { ...state, myFavorites: action.payload };
        case "FILTER": 
            console.log(state.allCharacters[0].gender)  
            
                if (action.payload === '*') {
                    return{
                        ...state,
                        myFavorites:state.allCharacters
                    }
                }

            return{
            ...state,    
            myFavorites: state.allCharacters.filter((obj)=>obj.gender === action.payload)
        } 
  
        case "ORDER":
            
            let all= state.allCharacters
            
            all = all.sort((a,b)=>{return a.id - b.id})
            if (action.payload === 'D') {
                all= all.reverse()
                console.log(all)
            }
            return{
            ...state,
            myFavorites: all


        }


    default: return{
        ...state 
    }
        
}
}