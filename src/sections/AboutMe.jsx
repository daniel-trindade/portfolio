import Button from "../components/Button"
import styles from "./AboutMe.module.css"
import TimeLine from "../components/TimeLine"
import meImg from '../imgs/eusemfundo.png'


const AboutMe = () => {
  return(
    <div className={styles.aboutMe} id='aboutMe'>
        <div className={styles.meLeft}>
          <div className={styles.me}>
            <div className={styles.imgContainer}>
              <img src={meImg} className={styles.mePhoto} alt='Foto de Daniel Trindade' />
            </div>
            <div className={styles.txtContainer}>
              <h1>Sobre mim</h1>
              <p>
                Sou um estusiasta da tecnologia e de tudo que ela tem a oferecer. Tenho me dedicado à programação web com enfase ao front-end sem deixar de lado boas oportunidades de  desenvolver minhas habilidades no back-end. Como profissional, destaco-me pela criatividade, capacidade de aprendizado acelerado e uma propensão natural para enfrentar e superar desafios. 
              </p>
            </div>

          </div>

          <Button btnName='Acesse meu Curriculo' link='download/Curriculum.pdf' download='Curriculum.pdf' type='application/pdf'/>

        </div>

        <div className={styles.meRight}>
          <TimeLine/>
        </div>
        
      </div>
  )
}

export default AboutMe