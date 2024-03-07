import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

import imgCosts from '../imgs/projs/Costs1.PNG'
import Skills from '../components/Skills'
import TimeLine from '../components/TimeLine'
import ProjBox from '../components/ProjBox'
import styles from './HomePage.module.css'
import meImg from '../imgs/eusemfundo.png'
import Button from '../components/Button'


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
      <div className={styles.projectContainer} id='projects'>
        <h1>Projetos</h1>
        <a href="#">        
          <ProjBox
            img={imgCosts}
            title='Costs' 
            description='Gerenciador financeiro para projetos de desenvolvimento web, sendo possível definir projetos com seus respectivos orçamentos e inserir cada custo que o projeto teve visando ter um maior controle financeito de cada projeto'
            techs={['React', 'JavaScript', 'HTML', 'CSS']}
          />
        </a>


      </div>
    </div>
  )


}

export default HomePage