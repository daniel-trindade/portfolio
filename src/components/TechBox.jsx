import styles from './TechBox.module.css'


const TechBox = ({tech, lvlExp}) => {


  return(
    <div className={styles.techContainer}>
      <h1>{tech}</h1>
      <img src={`../imgs/logos/${tech}.png`} alt={`${tech} logo`} />
    </div>
  )
}

export default TechBox