import styles from './TechBox.module.css'

const TechBox = ({title, techs, text}) => {

  return(
    <div className={styles.techContainer}>
      <h1>{title}</h1>
      <p>{text}</p>
      <ul className={styles.list}>
        {techs.map((tech, index) => (
          <li key={index} className={styles.listItem}>{tech}</li>
        ))}
      </ul>
    </div>
  )
}

export default TechBox