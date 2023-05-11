import styles from './estilos.module.css'
export const validation =(email )=>{

    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

if ( !(validEmail.test(email)) ) {
    return(<p>email invalido</p> )
} 
if (email ==='') {
   return( <p className={styles.E}>esta vacio</p>)
}

if (email.length>35) {
    
    return( <p className={styles.E}>nombre grande</p>)
}



}

export const validation2=(contraseña)=>{

    

    if (!(/\d/.test(contraseña))) {
        return(<p className={styles.E}>la contraseña debe tener <br/> al menos un numero</p>)
}
if (contraseña<6 || contraseña>10) {
    return(<p className={styles.E}>la contraseña debe tener<br/> entre 6 y 10 caracteres</p>)
}
}
