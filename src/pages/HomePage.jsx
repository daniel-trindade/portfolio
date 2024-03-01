import styles from './HomePage.module.css'
import TechBox from '../components/TechBox'
import meImg from '../imgs/eusemfundo.png'
import ProjBox from '../components/ProjBox'
import imgCosts from '../imgs/projs/Costs1.PNG'
import Button from '../components/Button'
import TimeLine from '../components/TimeLine'


const HomePage = () => {

  return(
    <div className={styles.mainContainer}>
      <section className={styles.nameContainer}>
        <h1 className={styles.initialScreem}>Daniel Trindade</h1>
        <p>Desenvolvedor WEB</p>
      </section>
      <section className={styles.aboutMe}>
        <div className={styles.meLeft}>
          <div className={styles.me}>
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

          <Button btnName='Acesse meu Curriculo'/>

        </div>

        <div className={styles.meRight}>
          <TimeLine/>
        </div>
        
      </section>
      <section className={styles.techContainer}>
        <h1>Tecnologias</h1>
        <div className={styles.tech}>
          <TechBox
            tech="HTML"
            lvlExp="2"
          />
          <TechBox
            tech="CSS"
            lvlExp="2"
          />
          <TechBox
            tech="JavaScript"
            lvlExp="2"
          />
          <TechBox
            tech="React"
            lvlExp="2"
          />
          <TechBox
            tech="C++"
            lvlExp="2"
          />
          <TechBox
            tech="Python"
            lvlExp="2"
          />
          
        </div>
      </section>
      <div className={styles.projectContainer}>
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