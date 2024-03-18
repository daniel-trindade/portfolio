import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

import Skills from '../sections/Skills'
import TimeLine from '../components/TimeLine'
import styles from './HomePage.module.css'
import meImg from '../imgs/eusemfundo.png'
import Button from '../components/Button'
import Projects from '../sections/Projects'
import Cover from '../sections/Cover'
import AboutMe from '../sections/AboutMe'


const HomePage = () => {

  return(
    <main className={styles.mainContainer}>

      <section className={styles.cover}>
        <Cover/>
      </section>

      <section className={styles.AboutMe}>
        <AboutMe/>
      </section>

      <section className={styles.skills} id='tech'>
        <Skills/>
      </section>
      
      <section className={styles.projects} id='projects'>
        <Projects/>
      </section>

    </main>
  )


}

export default HomePage