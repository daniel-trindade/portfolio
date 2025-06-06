import styles from './Skills.module.css'

import TechBox from '../components/TechBox'
import isf from '../imgs/ISF.png'

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
            tech="Angular"
            lvlExp="2"
          />
        </div>

        <div className={styles.appearOne}>
          <TechBox
            tech="TypeScript"
            lvlExp="2"
          />
        </div>
      </div>
      <div className={styles.soft}>
        <h2>Habilidades</h2>
        <div className={styles.skill}>
          <h3>Inglês</h3>
          <p>Certificado TOEFL ITP B1 com boa Comunicação</p>
          <img className={styles.isfLogo} src={isf} alt="ISF logo" />
        </div>
      </div>
    </div>

  )
}

export default Skills