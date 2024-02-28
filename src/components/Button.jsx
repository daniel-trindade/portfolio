import styles from './Button.module.css'

const Button = ({btnName}) =>{

  return(
    <button className={styles.button}>{btnName}</button>
  )

} 

export default Button