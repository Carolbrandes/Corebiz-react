import { Button } from "../Button";
import styles from "./styles.module.scss";
import email from "../../assets/images/email.svg"
import fone from "../../assets/images/fone.svg"
import logos from "../../assets/images/logos-footer.svg"

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div>
            <h2 className={`titulo3 ${styles.titulo}`}>Localização</h2>
            <p>
              Avenida Andrômeda, 2000. Bloco 6 e 8 Alphavile SP
              brasil@corebiz.ag +55 11 3090 1039
            </p>
          </div>

          <div className={styles.buttonWrapper}>
              <a href="#">
                  <Button bg="#fff" color="#000"  height="38px" className={styles.botao}>
                    <img className={styles.email} src={email} alt="email" />
                    Entre em contato
                  </Button>
              </a>

              <a href="#">
                  <Button bg="#fff" color="#000"  height="38px" className={styles.botao}>
                    <img className={styles.fone} src={fone} alt="fone" />
                   Fale com o nosso consultor online
                  </Button>
              </a>
          </div>

          <div className={styles.logoWrapper}>
             <img src={logos} alt="Logo Corebiz e VTEX" /> 
          </div>
        </div>
      </div>
    </footer>
  );
};
