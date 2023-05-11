import axios from "axios"
import { useParams, } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import styles from './estilos.module.css'

const Detail =()=>{
    const[character, setCharacter] = useState({})
    const {id} = useParams()
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    
    
     
    return(
        <div className={styles.detail}>
            <div>
                <h2>ID : {character.id}</h2>
                <h2>NOMBRE: {character.name}</h2>
                <h2>GENERO: {character.gender}</h2>
                <h2>ESPECIE: {character.species}</h2>
                <h2>ESTADO: {character.status}</h2>
            </div>
            <img src={character.image} />

        </div>

    )
}
export default Detail