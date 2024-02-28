import { useRef } from 'react'

import styles from './Button.module.css'

const btnRef = useRef()

const btnFunction = (e) => {
  if(btnRef.current){
    let x = e.pageX - btnRef.current.offsetLeft
    let y = e.pageY - btnRef.current.offsetTop
  
    btnRef.style.setProperty('--xAxis', x + 'px')
    btnRef.style.setProperty('--yAxis', y + 'px')
  }
}

const Button = ({btnName}) =>{

  return(
    <div>
      <a href="#" className={styles.button} onMouseMove={btnFunction} ref={btnRef}> 
        <span>
          {btnName}
        </span>
      </a>
    </div>
  )

} 

export default Button