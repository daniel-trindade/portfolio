import { useState } from 'react'

import styles from './ProjBox.module.css'

const ProjBox = ({img, title, techs, description}) =>{

  const [showDescription, setShowDescription] = useState(false)

  return(
    <div className={styles.projContainer} onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
      <h1>{title}</h1>
      <div className={styles.transition}>
        {!showDescription ? (
          <img src={img} alt="imagem de capa do projeto" />
        ) : (
          <div>
            <p>{description}</p>
            <h2>Tecnologias Utilizadas:</h2>
            <ul className={styles.list}>
              {techs.map((tech, index) => (
                <li key={index} className={styles.listItem}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
  
}

export default ProjBox