import styles from './/TimeLine.module.css'

const TimeLine = () =>{

   return(
    <div className={styles.timeLineContainer}>
      <main className={styles.row}>
        <section className={styles.coluna00}>
          <header className={styles.colunaTitulo}>
              <h2>Educação / Formação</h2>
          </header>
        
          <div className={styles.content}>
            <div className={styles.box}>
              <h4>2014</h4>
              <h3>Metropole Digital (UFRN)</h3>
              <p>
                Formação em Programação Básica pelo Instituto Metropole digital da Universidade Federal do Rio Grande do Norte.
              </p>
            </div>

            <div className={styles.box}>
              <h4>2015</h4>
              <h3>Metropole Digital (UFRN)</h3>
              <p>
                Formação Básica em Tecnologia da Informação para Processos Industriais no Instituto Metropole digital.
              </p>
            </div>

            <div className={styles.box}>
              <h4>2018 - 2022</h4>
              <h3>Ciencia & Tecnologia (UFRN)</h3>
              <p>
                Graduado em Ciência & Tecnologia pela Universidade Federal do Rio Grande do Norte com ênfase em Tecnologia da Computação.
              </p>
            </div>

            <div className={styles.box}>
              <h4>2023 - Presente</h4>
              <h3>Engenharia da Computação (UFRN)</h3>
              <p>
                Cursandoo o 7º período de Engenharia da Computação pela Universidade Federal do Rio Grande do Norte com 58% do curso integralizado.
              </p>
            </div>
          </div>

        </section>

      </main>

    </div>

   )

}

export default TimeLine