import { useState ,useEffect} from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import axios from 'axios';
import Nav from './components/nav';
import { Route, useLocation, } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import About from './components/about';
import Detail from './components/Detail';
import { BrowserRouter } from 'react-router-dom';
import Forms from './components/Form';
import { useNavigate, } from 'react-router-dom';
import Favorites from './components/favorites';
import style from './components/estilos.module.css'


function App() {
    let [characters, setCharacters] = useState([])

   async function onSearch(id) {
       try{let char = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
       
         
            setCharacters((oldChars) => [...oldChars, char.data]);
         
      }catch(error){window.alert('¡No hay personajes con este ID!')}
   }
      
      
      
      const onClose =(ID)=>{
      let noEliminados=[]
         for (let i = 0; i < characters.length; i++) {
            if (characters[i].id != ID) {
               noEliminados.push(characters[i])
            }  
         }
         setCharacters(characters = noEliminados)
      }

      const MostrarNav =()=>{
        if (useLocation().pathname !== '/') {
          return<Nav onSearch ={onSearch} /> 
        }
        
      }
   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   let email = 'lautarogimenezr@gmail.com'
   let password = '1234567'


    async function login(userData) {
      const { email, password } = userData;
      
      const URL = 'http://localhost:3001/rickandmorty/login/';
      try{let log = await axios(`http://localhost:3001/rickandmorty/login/?email=${email}&password=${password}`)

         const  access  = log.data; 
         setAccess(log.data);
         access && navigate('/home');
      }catch(error){window.alert(error)}
      
   }

      useEffect(() => {
         !access && navigate('/');
      }, [access]);
   
   return (
      <div>        
            {MostrarNav()}
         
         <div className='di'></div>
         <Routes>
            <Route path= '/favorites' element={<Favorites onClose={onClose}/>}></Route>
            <Route path='/' element={<Forms login = {login}/>}></Route>
            <Route path='/home' element={
               <Cards characters = {characters} onClose={onClose}/>}> 
            </Route>
            <Route path='/about' element={<About/>}> </Route>
            <Route path={'/detail/:id'} element={<Detail/>}> </Route>

         </Routes>
      </div>
   );
}

export default App; 
