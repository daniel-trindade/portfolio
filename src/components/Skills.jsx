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
            <div className={styles.box}>
              <h3>Inglês</h3>
              <p>
                <span>Writing:</span> Intermediário - <span>Listening:</span> Avançado - <span>Speaking:</span> Avançado. <br />
              </p>
            </div>
          </div>
        </div>

        <div className={styles.sideContainer}>
          <h3>Tecnologias</h3>
          <div className={styles.tech}>
            <TechBox
              tech="HTML"
              lvlExp="2"
            />
            <TechBox
              tech="CSS"
              lvlExp="2"
            />
            <TechBox
              tech="JavaScript"
              lvlExp="2"
            />
            <TechBox
              tech="React"
              lvlExp="2"
            />
            <TechBox
              tech="C++"
              lvlExp="1"
            />
            <TechBox
              tech="Python"
              lvlExp="1"
            />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Skills