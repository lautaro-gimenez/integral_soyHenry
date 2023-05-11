import Card from './Card';
import style from './estilos.module.css'

export default function Cards(props) {
   const {characters} = props
  
   return (
      <div className={style.content}>
         {
          characters.map( persona => {
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
      </div>)
}
