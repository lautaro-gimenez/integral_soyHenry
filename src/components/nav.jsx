import SearchBar from "./SearchBar";
import about from "./about";
import { NavLink } from "react-router-dom";
import styles from './estilos.module.css'
export default (props)=>{
   
    return(
        <div className={styles.bar}>
            <button><NavLink to='/about'>about</NavLink></button>
            <button><NavLink to='/home'>home</NavLink></button>
            <button> <NavLink to= '/favorites' >favorites</NavLink> </button>
            <SearchBar props= {props}/>
        </div>
    )
}