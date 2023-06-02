import { connect } from 'react-redux';
import style from './estilos.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions';
import { useState } from 'react';
import { useEffect } from 'react';


function Card(props) {
   
   
   
   
   const[isFav, setIsFav] = useState(true)
   useEffect(() => {
         props.myFavorites.forEach((fav) => {
               if (fav.id === props.id) {
                     setIsFav(false);
                     
                     ;
                  }
               });
            }, [props.myFavorites]);


   const handleFavorite = ()=>{
      
      if (isFav===true) {
         setIsFav(false)
         props.añadirFav(props)
      }
      if (isFav ===false) {
         setIsFav(true)
         props.deletFav(props.id)
      }
      
   }
            
            
            return (
               
               <div className={style.card}>

         {
            isFav ? (
               <button onClick={handleFavorite}>🤍</button>
               ) : (
                  <button  onClick={handleFavorite}>❤️</button>
                  )
               }
         
          <button id={style.fav} onClick={()=>props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
         <h2>{props?.name}</h2>
         </Link>
         <h2>{props?.origin}</h2>
         <h2>{props?.status}</h2>
         <img src={props?.image} alt='' /> 
         <h2>{props?.species}</h2>
         <h2>{props?.gender}</h2>
                

      </div>
   );
}
const mapDispatchToProps =(dispatch)=>{
   return{
      añadirFav: (f)=>{dispatch(addFav(f))},
      deletFav: (g)=>{dispatch(removeFav(g))}
   }
}
const mapStateToProps =(state)=>{
return{
   myFavorites: state.myFavorites
}}


export default connect (mapStateToProps,mapDispatchToProps)(Card)