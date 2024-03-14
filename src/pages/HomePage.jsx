import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

import Skills from '../components/Skills'
import TimeLine from '../components/TimeLine'
import styles from './HomePage.module.css'
import meImg from '../imgs/eusemfundo.png'
import Button from '../components/Button'
import Projects from '../components/Projects'


const HomePage = () => {

  return(
    <div className={styles.mainContainer}>
      <section className={styles.nameContainer} id='home'>

        <h1>
          Daniel Trindade
        </h1>
        <p>
          Desenvolvedor WEB
        </p>
        <div className={styles.socialMedia}>
          <ul>
            <li>
              <a href="https://github.com/daniel-trindade" target='blank'>
                <FaGithub/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/daniel-trindade-9009b117a/" target='blank'>
                <FaLinkedin/> 
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dan.nieltrindade/" target='blank'>
                <FaInstagram/> 
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.aboutMe} id='aboutMe'>
        <div className={styles.meLeft}>
          <div className={styles.me}>
            <div className={styles.imgContainer}>
              <img src={meImg} className={styles.mePhoto} alt='Foto de Daniel Trindade' />
            </div>
            <div className={styles.txtContainer}>
              <h1>Sobre mim</h1>
              <p>
                Sou apaixonado por tecnologia e dedicado à programação web tenho dado enfase ao front-end. Graduado em Ciência e Tecnologia pela Universidade Federal do Rio Grande do Norte (UFRN), atualmente cursando o 7° período de Engenharia da Computação na mesma instituição. Sou um profissional criativo, de rápido aprendizado e que aprecia desafios.
              </p>
            </div>

          </div>

          <Button btnName='Acesse meu Curriculo' link='download/Curriculum.pdf' download='Curriculum.pdf' type='application/pdf'/>

        </div>

        <div className={styles.meRight}>
          <TimeLine/>
        </div>
        
      </section>
      <section className={styles.techContainer} id='tech'>
        <Skills/>
      </section>
      <section className={styles.projects} id='projects'>
        <Projects/>
      </section>
    </div>
  )


}

export default HomePage