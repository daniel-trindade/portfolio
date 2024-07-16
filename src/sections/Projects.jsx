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
          description="Calculadora para calculos simples como soma, subtração, divisão, multiplicação, potenciação, dentre outros. O projeto visou por em prática principalmente a criação de botões e implementação de estilos com CSS."
          techs={["HTML", "CSS", "JavaScript"]}
        />

        <ProjectBox
          img={accervoImg}
          title="Accervo"
          description="Site desenvolvido para ajudar estudantes fornecendo pequenas facilidades, tais como um conversor de Volume, Comprimentos e Temperatura como também Um aplicativo de analize geométrica."
          techs={["HTML", "CSS", "React", "JavaScript"]}
        />

        <ProjectBox
          img={costImg}
          title="Costs"
          description="Um sistema de gerenciamento financeiro desenvolvido em React com o intuito de por em prática comunicação com banco de dados e criação de formulários "
          techs={["HTML", "CSS", "React"]}
        />
      </div>
      
    </div>
  )
}

export default Projects