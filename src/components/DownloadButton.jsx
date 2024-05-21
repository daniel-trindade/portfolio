
import styles from './DownloadButton.module.css'
import PDF_CURRICULUM_URL from '../download/Curriculum.pdf'


const DownloadButton = () =>{

  const downloadFileAtURL=(url)=>{
    const aTag = document.createElement('a')
    aTag.href=url
    aTag.setAttribute('download', 'Curriculum.pdf')
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }


  return(
    <button className={styles.button} onClick={()=>{downloadFileAtURL(PDF_CURRICULUM_URL)}}>
      <span>Acesse Meu Curriculo</span>
    </button>
  )

} 

export default DownloadButton