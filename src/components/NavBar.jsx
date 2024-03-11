import styles from './NavBar.module.css'

const NavBar = ({anchor}) =>{
  return(
    <nav className={styles.navBar}>
      <ul>
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