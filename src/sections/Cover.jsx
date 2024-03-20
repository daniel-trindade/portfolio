import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

import styles from "./Cover.module.css"

const Me = () => {

  return(
    <div className={styles.nameContainer}>

      <h1>Daniel Trindade</h1>

      <p>Desenvolvedor WEB</p>

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
      
    </div>
  )
}

export default Me