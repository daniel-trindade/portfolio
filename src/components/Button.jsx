import { useRef } from 'react'

import styles from './Button.module.css'

const Button = ({btnName, link, download, type}) =>{

  const btnRef = useRef()

  const btnFunction = (e) => {

    if(btnRef.current){
      let x = e.pageX - btnRef.current.offsetLeft
      let y = e.pageY - btnRef.current.offsetTop
    
      btnRef.current.style.setProperty('--xAxis', x + 'px')
      btnRef.current.style.setProperty('--yAxis', y + 'px')
    }
  }

  return(
    <div>
      <a href={link} download={download} type={type} className={styles.button} onMouseMove={btnFunction} ref={btnRef}> 
        <span>
          {btnName}
        </span>
      </a>
    </div>
  )

} 

export default Button