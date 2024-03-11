import styles from './TechBox.module.css'
import javaScript from '../imgs/logos/JavaScript.png'
import Cplus from '../imgs/logos/C++.png'
import python from '../imgs/logos/Python.png'
import html from '../imgs/logos/HTML.png'
import css from '../imgs/logos/CSS.png'
import react from '../imgs/logos/React.png'


const TechBox = ({tech, lvlExp}) => {

  let logo = ''

  if(tech === 'JavaScript'){
    logo = javaScript
  }  
  if(tech === 'C++'){
    logo = Cplus
  }
  if(tech === 'Python'){
    logo = python
  }
  if(tech === 'HTML'){
    logo = html
  }
  if(tech === 'CSS'){
    logo = css
  }
  if(tech === 'React'){
    logo = react
  }

  const fillWidth = {
    1: '10%',
    2: '50%',
    3: '100%'
  }[lvlExp]|| '0%';


  return(
    <div className={styles.techContainer}>
      <h1>{tech}</h1>
      <img src={logo} alt={`${tech} logo`} />
      <p>Experiência</p>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: fillWidth }}></div>
      </div>
    </div>
  )
}

export default TechBox