import styles from './Skills.module.css'

import TechBox from './TechBox'

const Skills = () =>{
  return(
    <div className={styles.skillContainer}>
      <h2>Tecnologias</h2>
      <div className={styles.tech}>
        <div className={styles.appearSix}>
          <TechBox
            tech="HTML"
            lvlExp="2"
          />
        </div>
        <div className={styles.appearFive}>
          <TechBox
            tech="CSS"
            lvlExp="2"
          />
        </div>
        <div className={styles.appearFour}>
          <TechBox
            tech="JavaScript"
            lvlExp="2"
          />
        </div>

        <div className={styles.appearThree}>
          <TechBox
            tech="React"
            lvlExp="2"
          />
        </div>

        <div className={styles.appearTwo}>
          <TechBox
            tech="C++"
            lvlExp="1"
          />
        </div>

        <div className={styles.appearOne}>
          <TechBox
            tech="Python"
            lvlExp="1"
          />
        </div>

      </div>
    </div>

  )
}

export default Skills