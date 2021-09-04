import { Input } from "../Input";
import styles from "./styles.module.scss";
import { AppContext } from "../../Store";
import { useContext, useState } from "react";
import { Button } from "../Button";
import {
  isEmailValido,
  isCampoPreenchido,
  onBlurEmailValidacao,
  onBlurCampoPreenchido,
} from "../../functions";
import { POST_USER } from "../../api";

export const FormNewsletter = () => {
  const { nome, setNome, email, setEmail } = useContext(AppContext);
  const [erroNome, setErroNome] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [mensagemFinalizacao, setMensagemFinalizacao] = useState(false);

  const registrarUsuario = () => {
    setErroNome("");
    setErroEmail("");

    if (!isCampoPreenchido(nome)) {
      setErroNome("Preencha com seu nome completo");
    }

    if (!isEmailValido(email) || !isCampoPreenchido(email)) {
      setErroEmail("Preencha com um e-mail válido");
    }

    if (isEmailValido(email) && isCampoPreenchido(nome)) {
      POST_USER({ name: nome, email })
        .then((resp) => {
          if (resp === 200) {
            setMensagemFinalizacao(true);
          }
        })
        .catch((error) => {
          alert("Desculpe, não foi possível cadastrar seu e-mail.");
        })
        .finally(() => {
          setEmail("");
          setNome("");
        });
    }
  };

  return (
    <section className={styles.newsletter}>
      <div className={`container ${styles.newsletterWrapper}`}>
        {mensagemFinalizacao ? (
          <div>
            <h2 className="titulo2">Seu e-mail foi cadastrado com sucesso!</h2>
            <p className={styles.texto}>
              A partir de agora você receberá as novidades e ofertas exclusivas.
            </p>
            <Button
              height="48px"
              className={styles.botaoNovoEmail}
              onClick={() => setMensagemFinalizacao(false)}
            >
              Cadastrar novo e-mail
            </Button>
          </div>
        ) : (
          <div>
            <h2 className={styles.titulo}>
              Participe de nossas news com promoções e novidades!
            </h2>

            <div className={styles.inputsWrapper}>
              <div className={styles.input}>
                <Input
                  value={nome}
                  onChange={setNome}
                  onBlur={() =>
                    onBlurCampoPreenchido(
                      nome,
                      isCampoPreenchido,
                      setErroNome,
                      "Preencha com seu nome completo"
                    )
                  }
                  type="text"
                  placeholder="Digite seu nome"
                  mensagemErro={erroNome}
                />
              </div>

              <div className={styles.input}>
                <Input
                  value={email}
                  onChange={setEmail}
                  onBlur={() =>
                    onBlurEmailValidacao(
                      email,
                      isEmailValido,
                      isCampoPreenchido,
                      setErroEmail
                    )
                  }
                  type="email"
                  placeholder="Digite seu email"
                  mensagemErro={erroEmail}
                />
              </div>

              <Button
                className={styles.botao}
                height="48px"
                onClick={registrarUsuario}
              >
                Eu quero!
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
