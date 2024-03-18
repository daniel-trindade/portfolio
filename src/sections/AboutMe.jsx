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
                Sou apaixonado por tecnologia e dedicado à programação web tenho dado enfase ao front-end. Graduado em Ciência e Tecnologia pela Universidade Federal do Rio Grande do Norte (UFRN), atualmente cursando o 7° período de Engenharia da Computação na mesma instituição. Sou um profissional criativo, de rápido aprendizado e que aprecia desafios.
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