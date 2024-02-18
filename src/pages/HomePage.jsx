import styles from './HomePage.module.css'
import TechBox from '../components/TechBox'

const HomePage = () => {

  return(
    <div>
      <div>
        <h1 className={styles.initialScreem}>Daniel Trindade</h1>
      </div>
      <div className={styles.aboutMe}>
        <h1>Sobre mim</h1>
        <p>
          Olá, sou Daniel Trindade, apaixonado por tecnologia e dedicado à programação web. Graduado em Ciência e Tecnologia pela Universidade Federal do Rio Grande do Norte, atualmente cursando o 7° período de Engenharia da Computação na mesma instituição. Sou um profissional criativo, de rápido aprendizado e que aprecia desafios.
        </p>
      </div>
      <div className={styles.tecContainer}>
        <h1>Tecnologias</h1>
        <TechBox
          title='Front-End'
          text='Desenvolvo sites responsivos, componentizados e dotados de tecnologia atuais em conjunto com bibliotecas populares tais como bootstrap.'
          techs={['React', 'HTML', 'CSS']}
        />
        <TechBox
          title='Back-End'
          text='Desenvolvo sites responsivos, componentizados e dotados de tecnologia atuais em conjunto com bibliotecas populares tais como bootstrap.'
          techs={['JavaScript', 'PHP']}
        />
      </div>
    </div>
  )


}

export default HomePage