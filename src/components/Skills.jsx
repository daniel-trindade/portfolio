import styles from './Skills.module.css'

import TechBox from './TechBox'

const Skills = () =>{
  return(
    <div className={styles.skillContainer}>

      <h2>Habilidades</h2>

      <div className={styles.organizer}>

        <div className={styles.sideContainer}>
          <h3>Soft Skills</h3>
          <div className={styles.tech}>
    
          </div>
        </div>

        <div className={styles.sideContainer}>
          <h3>Tecnologias</h3>
          <div className={styles.tech}>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Skills