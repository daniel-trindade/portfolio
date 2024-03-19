import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

import styles from '../components/Footer.module.css'

const Footer = () => {

  return(
    <div className={styles.footerContainer}>

        <h1>
          Contatos:
        </h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="https://github.com/daniel-trindade"  target='blank'>
              <FaGithub/>
              <p>GitHub</p>
            </a>
          </li>
          <li className={styles.item}>
            <a href="https://www.linkedin.com/in/daniel-trindade-9009b117a/"  target='blank'>
              <FaLinkedin/> 
              <p>LinkedIn</p>
            </a>
          </li>
          <li className={styles.item}>
            <a href="https://www.instagram.com/dan.nieltrindade/"  target='blank'>
              <FaInstagram/> 
              <p>Instagram</p>
            </a>
          </li>
        </ul>

        <p className={styles.copy}>Daniel Trindade &copy; 2024 </p>
  
    </div>
  )

}

export default Footer