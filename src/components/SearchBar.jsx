import  {useState}  from 'react';
import styles from './estilos.module.css'
export default function SearchBar({props}) {

   let [id, setID] =useState('')

   const handleChange=(event)=>{
      setID(id = event.target.value)
   }
   
   return (
      
      <div className={styles.nav} >
         
         <input  type='search'  onChange={handleChange} />
         <button onClick={()=>props.onSearch(id)}>Agregar</button> 
      </div>
   );
}
