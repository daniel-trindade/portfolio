import styles from "./ProjectBox.module.css";
import ImgCall from "./ImgCall";

const ProjectBox = ({ img, title, description, techs, link, size}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <a href={link} className={styles.link} target="blank">
          <img src={img} alt="Imagem de capa do projeto" className={size ? styles.size : styles.img}/>
          <h2>{title}</h2>
        </a>
        <p>{description}</p>
        <h3>Tecnologias:</h3>
        <ul className={styles.list}>
          {techs.map((tech, index) => (
            <li key={index} className={styles.listItem}>
              <ImgCall imgName={tech} width="50px" />
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectBox;
