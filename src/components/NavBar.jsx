import { FaHamburger } from "react-icons/fa";
import { useState } from "react";

import styles from './NavBar.module.css'

const NavBar = () =>{

  const [menuVisible, setMenuVisible] = useState(false)

  const visible = () =>{
    setMenuVisible(!menuVisible)
  }

  return(
    <nav className={styles.navBar}>
      <a onClick={visible} href="#" className={styles.hamburgerMenu}><FaHamburger /></a>
      <ul className={`${styles.menuItem} ${menuVisible ? styles.visible : styles.hidden}`}>
        <li><a href="#home">Início</a></li>
        <li><a href="#aboutMe">Sobre mim</a></li>
        <li><a href="#tech">Tecnologias e Habilidades</a></li>
        <li><a href="#projects">Projetos</a></li>
      </ul>
      <div className={styles.progressBar}></div>
    </nav>
  )
}

export default NavBar