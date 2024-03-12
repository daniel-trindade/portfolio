import styles from './ProjectSlideBox.module.css'
import costsImg from '../imgs/projs/calculadora/calculadora1.PNG'

const ProjectSlideBox = () => {

  return(
    <div className={styles.slideContainer}>
      <img src={costsImg} alt="Imagem de capa do projeto" />
      <h2>Calculadora</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat labore saepe id, at omnis suscipit minima aliquam exercitationem odit odio. Cupiditate at natus iure consectetur assumenda, minus ab fuga culpa.</p>
      <h3>Tecnologias:</h3>
    </div>
  )
}

export default ProjectSlideBox