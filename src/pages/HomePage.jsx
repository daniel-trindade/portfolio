import styles from './HomePage.module.css'
import TechBox from '../components/TechBox'
import meImg from '../imgs/eusemfundo.png'

const HomePage = () => {

  return(
    <div className={styles.mainContainer}>
      <div className={styles.nameContainer}>
        <h1 className={styles.initialScreem}>Daniel Trindade</h1>
        <p>Desenvolvedor WEB</p>
      </div>
      <div className={styles.aboutMe}>
        <div className={styles.imgContainer}>
          <img src={meImg} className={styles.mePhoto} />
        </div>
        <div className={styles.txtContainer}>
          <h1>Sobre mim</h1>
          <p>
            Sou apaixonado por tecnologia e dedicado à programação web. Graduado em Ciência e Tecnologia pela Universidade Federal do Rio Grande do Norte (UFRN), atualmente cursando o 7° período de Engenharia da Computação na mesma instituição. Sou um profissional criativo, de rápido aprendizado e que aprecia desafios.
          </p>
        </div>
        
      </div>
      <div className={styles.techContainer}>
        <h1>Tecnologias</h1>
        <div className={styles.tech}>
          <TechBox
            title='Front-End'
            text='Desenvolvo sites responsivos, componentizados e dotados de tecnologia atuais em conjunto com bibliotecas populares tais como bootstrap e Konva.'
            techs={['React', 'HTML', 'CSS']}
          />
          <TechBox
            title='Back-End'
            text='Ápto a promover integração entre Banco de Dados e o Front de forma segura e otimizada com bom domínio da lógica de programação.'
            techs={['JavaScript', 'PHP', 'MySQL']}
          />
          <TechBox
            title='Outros'
            text='Durante o processo de formação na Universidade pude desenvolver alguns projetos que me deram fluencia nas seguintes linguagens:'
            techs={['C++', 'C', 'QT', 'Python']}
          />
        </div>
      </div>
    </div>
  )


}

export default HomePage