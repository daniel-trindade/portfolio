import styles from './Projects.module.css'
import ProjectSlideBox from './ProjectSlideBox'
import VanillaTilt from 'vanilla-tilt'

const Projects = () =>{

  VanillaTilt.init(document.querySelector("#tilt"));

  return(
    <div className={styles.projectsContainer}>
      <h2 className={styles.sectionTitle}>Projetos de Estudo Pessoal</h2>

      <div className={styles.vanilaTilt} id='tilt'>
        <ProjectSlideBox/>  
      </div> 

      <script type="text/javascript" src="./VanillaTilt.js"></script>
    </div>
  )
}

export default Projects