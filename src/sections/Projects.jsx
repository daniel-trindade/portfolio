import styles from './Projects.module.css'
import ProjectBox from '../components/ProjectBox'
import calcImg from '../imgs/projs/calculadora/calculadora1.PNG'
import costImg from '../imgs/projs/costs/costs1.PNG'
import accervoImg from '../imgs/projs/accervo/acervo1.PNG'

const Projects = () =>{

  return(
    <div className={styles.projectsContainer}>
      <h2 className={styles.sectionTitle}>Projetos de Estudo Pessoal</h2>
      <div className={styles.projects}>

        <ProjectBox
          img={calcImg}
          title="Calculadora"
          description="Calculadora para calculos simples como soma, subtração, divisão, multiplicação, potenciação, destre outros. O projeto visou por em prática peicipalmente a criação de botões e organização com CSS."
          techs={["HTML", "CSS", "JavaScript"]}
        />

        <ProjectBox
          img={accervoImg}
          title="Accervo"
          description="Site desenvolvio para ajudar estudantes com pequenas facilidades, tais como um conversor de Volume, Comprimentos e Temperatura e Um aplicativo de analize geométrica."
          techs={["HTML", "CSS", "React", "JavaScript"]}
        />

        <ProjectBox
          img={costImg}
          title="Calculadora"
          description="Calculadora para calculos simples como soma, subtração, divisão, multiplicação, potenciação, destre outros. O projeto visou por em prática peicipalmente a criação de botões e organização com CSS."
          techs={["HTML", "CSS", "React"]}
        />
      </div>
      
    </div>
  )
}

export default Projects