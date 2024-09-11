import styles from './ImgCall.module.css'

import javaScript from '../imgs/logos/JavaScript.png'
import Cplus from '../imgs/logos/C++.png'
import python from '../imgs/logos/Python.png'
import html from '../imgs/logos/HTML.png'
import css from '../imgs/logos/CSS.png'
import react from '../imgs/logos/React.png'
import angular from "../imgs/logos/angular.svg.png"
import typescript from "../imgs/logos/typescript.png"

const ImgCall = ({imgName, width}) => {

  let logo = ''

  if(imgName === 'JavaScript'){
    logo = javaScript
  }  
  if(imgName === 'C++'){
    logo = Cplus
  }
  if(imgName === 'Python'){
    logo = python
  }
  if(imgName === 'HTML'){
    logo = html
  }
  if(imgName === 'CSS'){
    logo = css
  }
  if(imgName === 'React'){
    logo = react
  }
  if (imgName === "Angular"){
    logo = angular
  }
  if (imgName === "TypeScript"){
    logo = typescript
  }

  return(
    <img className={styles.control} src={logo} alt={`${imgName} image`} style={{width: width}}/>
  )
}

export default ImgCall