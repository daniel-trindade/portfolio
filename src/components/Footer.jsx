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
            <a href="https://github.com/daniel-trindade">
              <FaGithub/>
              <p>GitHub</p>
            </a>
          </li>
          <li className={styles.item}>
            <a href="https://www.linkedin.com/in/daniel-trindade-9009b117a/">
              <FaLinkedin/> 
              <p>LinkedIn</p>
            </a>
          </li>
          <li className={styles.item}>
            <a href="https://www.instagram.com/dan.nieltrindade/">
              <FaInstagram/> 
              <p>Instagram</p>
            </a>
          </li>
        </ul>

    </div>
  )

}

export default Footer