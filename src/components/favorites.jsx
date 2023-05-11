import { connect } from "react-redux"
import Card from './Card'
import styles from './estilos.module.css'
import { useDispatch } from "react-redux"
import { orderCards,filterCards } from "../redux/actions"
import { useState } from "react"

  const Favorites=(props) =>{
    const [aux, setAux]=useState(false)
    
    const dispatch =useDispatch()
    
    const HandleOrder =(event)=>{
      setAux(!aux)
     dispatch(orderCards(event.target.value))
     
    }
    const HandleFilter =(event)=>{
      dispatch(filterCards(event.target.value)) 
    }

    


    
    return(
        <div className={styles.favorites}>
          <div className={styles.di}></div>

          <p>ordenar:</p>
          <select onChange={HandleOrder}>
            <option value="">por defecto</option>
            <option value="A" >Ascendentes</option>
            <option value="D" >Descendentes</option>
          </select>
            <p>filtrar:</p>
          <select onChange={HandleFilter}>
            <option value="*">sin filtro</option>
            <option value="Male"  >Male</option>
            <option value="Female" >Female</option>
            <option value="Genderless" >Genderless</option>
            <option value="unknown" >unknown</option>
          </select>

          
        <h1>Estos son tus personajes favoritos</h1>

{
          props.myFavorites.map( persona => {
            return (
                <>
                 <Card
            id={persona.id}
            keys ={persona.id}
            name={persona.name}
            status={persona.status}
            species={persona.species}
            gender={persona.gender}
            origin={persona.origin.name}
            image={persona.image}
            onClose={()=>props.onClose(persona.id)}
          />
                
                </>
            )
        })
      
      }

        </div>
    )
        
    
}

const mapStateToProps =(state)=>{
    return{
       myFavorites: state.myFavorites
    }
    
}

export default connect(mapStateToProps,null) (Favorites)