import styles from "./Projects.module.css";

import ProjectBox from "../components/ProjectBox";
import costImg from "../imgs/projs/costs/costs1.PNG";
import accervoImg from "../imgs/projs/accervo/acervo1.PNG";
import presenceImg from "../imgs/projs/Presence/Presence.png";
import calcImg from "../imgs/projs/calculadora/calculadora1.PNG";
import portfolioImg from "../imgs/projs/portfolio/portifolio.png";
import conviteImg from "../imgs/projs/convite virtual/convite-virtual.png";


const Projects = () => {

  return (
    <div className={styles.projectsContainer}>
      <h2 className={styles.sectionTitle}>Projetos de Estudo Pessoal</h2>
      <div className={styles.projects}>
        <ProjectBox
          img={presenceImg}
          title="Presence"
          description="Sistema Web para gerenciamento e registro de Frequencia. Foi feito com o intuito de registrar o compareciento de pessoas a reuniões, gerando assim relatórios de frequencia da turma e de cada um dos indivíduos isolados"
          techs={["HTML", "CSS", "JavaScript", "React"]}
          link="https://presence-three.vercel.app/"
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

        <ProjectBox
          img={calcImg}
          title="Calculadora"
          description="Calculadora para calculos simples como soma, subtração, divisão, multiplicação, potenciação, dentre outros. O projeto visou por em prática principalmente a criação de botões e implementação de estilos com CSS."
          techs={["HTML", "CSS", "JavaScript"]}
        />

        <ProjectBox
          img={conviteImg}
          title="Convite Online"
          description="Convite interativo para aniversário feito sob encomenda. Convite feito em duas paginas com fundo musical, confirmação de presença linkado com o WhatsApp, localização integrada com o Gooogle Maps"
          techs={["HTML", "CSS", "JavaScript"]}
          link="https://convite-virtual-pietra.vercel.app/"
          size={true}
        />

        <ProjectBox
          img={portfolioImg}
          title="Portfólio"
          description="Este portifólio foi criado e implementado do zero, utilizando React e seu poder de componentização, foi feito com o intuito de mostrar as habilidades adquiridas até o presente momento. Está em contante melhoria sendo aplicado cada novo conceito aprendido"
          techs={["HTML", "CSS", "JavaScript", "React"]}
          link="https://portfolio-kappa-lake-89.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
