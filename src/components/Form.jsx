import styles from './estilos.module.css'
import { useState } from 'react'
import {validation, validation2} from './validation'

const Forms =(props)=>{
    const {login} = props
    

    const [userData, setUserData] = useState({email:'', password :''})
    const changeEmail =(event)=>{setUserData({...userData,email : event.target.value})}
    const changePassword=(event)=>{setUserData({...userData,password : event.target.value })}
    
    const [errors, setErrors] = useState([])
    
    
    
    
    const handleSubmit =(event)=>{
        
        console.log(errors)
        event.preventDefault()
        login(userData) 
        const em =validation(userData.email)
        const pass = validation2(userData.password)
        setErrors([em,pass])
        console.log(errors)
    }

    


    return (
        <div className={styles.forms}>
            <forms>
                <label htmlFor="">email</label> <br />
                <input type="text" value={userData.email} onChange={changeEmail} />
                <br />
                {errors[0]}
                <br />
                <label htmlFor="">password</label> <br />
                <input type="text" value={userData.password} onChange={changePassword}/>
                <br />
                {errors[1]}
                <br />
                <button onClick={handleSubmit} >submit</button>
            </forms>
        </div>
    )
}

export default Forms