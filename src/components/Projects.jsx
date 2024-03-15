import styles from './Projects.module.css'
import ProjectBox from './ProjectBox'
import costsImg from '../imgs/projs/calculadora/calculadora1.PNG'

const Projects = () =>{

  return(
    <div className={styles.projectsContainer}>
      <h2 className={styles.sectionTitle}>Projetos de Estudo Pessoal</h2>
      
      <ProjectBox
        img={costsImg}
        title="Calculadora"
        description="iasoin pnf nf asadadiaw asdakm \sapõfj asam dasdaspdmasdamsdia dawda~sd as~dawdiaosidn asoidaoid aosi aodin aosdia0wj s oaid asid asid asid a~d  ~kngadgak g odi osfi nodsfiÓFI"
        techs={["HTML", "CSS", "JavaScript"]}
      />
    </div>
  )
}

export default Projects