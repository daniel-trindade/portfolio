import styles from './ProjBox.module.css'

const ProjBox = ({img, title, techs, description}) =>{

  return(
    <div className={styles.projContainer}>
      <a href="#">{title}</a>
      <div className={styles.boxAnimation}>
        <img src={img} alt="imagem de capa do projeto" />
        <div className={styles.descriptionContainer}>
          <h2>Descrição:</h2>
          <p>{description}</p>
          <h2>Tecnologias Utilizadas:</h2>
          <ul className={styles.list}>
            {techs.map((tech, index) => (
              <li key={index} className={styles.listItem}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
  
}

export default ProjBox