import styles from './ProjBox.module.css'

const ProjBox = ({img, title, techs, description}) =>{

  return(
    <div className={styles.projContainer}>
      <img src={img} alt="imagem de capa do projeto" />
      <h1>{title}</h1>
      <p>{description}</p>
      <h2>Tecnologias Utilizadas:</h2>
      <ul className={styles.list}>
        {techs.map((tech, index) => (
          <li key={index} className={styles.listItem}>{tech}</li>
        ))}
      </ul>
    </div>
  )
  
}

export default ProjBox