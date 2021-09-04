import styles from "./styles.module.scss";
import logo from "../../assets/images/logo.svg";
import carrinho from "../../assets/images/carrinho.svg";
import menu from "../../assets/images/menu.svg";
import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../Store";
import { ProdutoCarrinho } from "../../interface";
import { useMedia } from "../../hooks/useMedia";

export const Header = () => {
  const { listaCarrinho } = useContext(AppContext);
  const [menuMobile, setMenuMobile] = useState(false);
  const [totalItens, setTotalItens] = useState(0);
  const size = useMedia();

  const totalItensCarrinho = (lista: Array<ProdutoCarrinho>) => {
    if (lista.length > 0) {
      setTotalItens(
        lista.map((item) => item.quantidade).reduce((acc, curr) => acc + curr)
      );
    }
  };

  useEffect(() => {
    if (size[0] >= 1200) {
      setMenuMobile(false);
    }
  }, [size]);

  useEffect(() => {
    totalItensCarrinho(listaCarrinho);
  }, [listaCarrinho]);

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.menu}>
          <div
            onClick={() => setMenuMobile(!menuMobile)}
            className={styles.menuMobile}
          >
            <img src={menu} alt="menu" />
          </div>

          <div>
            <Link to="/">
              <img src={logo} alt="Corebiz" />
            </Link>
          </div>

          <div className={styles.menuColumn}>
            <div className={`${styles.buscar} displayNoneMobile`}>
              <input type="text" placeholder="O que está procurando?" />
            </div>

            <div className={styles.links}>
              <a className={`${styles.minhaConta} displayNoneMobile`} href="#">
                Minha Conta
              </a>

              <Link className={styles.carrinho} to="/carrinho">
                <img src={carrinho} alt="carrinho" />
                <div className={styles.quantidadeItensCarrinho}>
                  {totalItens}
                </div>
              </Link>
            </div>
          </div>
        </nav>

        <div className={`${styles.buscar} displayNoneDesktop`}>
          <input type="text" placeholder="O que está procurando?" />
        </div>

        <nav
          className={`${styles.linksMenuMobile} ${
            menuMobile ? styles.active : styles.inactive
          }`}
        >
          <Link to="/">Início</Link>
          <Link to="/carrinho">Meu Carrinho</Link>
          <a href="#">Minha Conta</a>
        </nav>
      </div>
    </header>
  );
};
