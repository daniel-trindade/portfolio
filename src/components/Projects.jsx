import styles from './Projects.module.css'
import ProjectSlideBox from './ProjectSlideBox'

const Projects = () =>{

  return(
    <div className={styles.projectsContainer}>
      <h2 className={styles.sectionTitle}>Projetos de Estudo Pessoal</h2>
      <ProjectSlideBox/>
    </div>
  )
}

export default Projects