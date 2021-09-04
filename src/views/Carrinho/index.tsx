import styles from "./styles.module.scss";
import { AppContext } from "../../Store";
import { useContext, useEffect, useState } from "react";
import { ProdutoItem } from "../../components/Produto";
import { formatarPreco } from "../../functions";

export const Carrinho = () => {
  const { listaCarrinho } = useContext(AppContext);
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
      setValorTotal(listaCarrinho.map(item => item.price * item.quantidade).reduce((acc, curr) => acc + curr))
  }, [listaCarrinho])

  return (
    <section className="section">
      <div className="container">
        <h2 className={`titulo1 ${styles.titulo}`}>Minhas Compras</h2>

        {listaCarrinho.length > 0 ? (
          <div>
            {listaCarrinho.map((item, index) => (
              <ProdutoItem produto={item} key={index} isCarrinho />
            ))}

            <div className={styles.valorTotal}> Total: {formatarPreco(valorTotal)}</div>
          </div>
        ) : (
          <div>Carrinho de compras vazio</div>
        )}
      </div>
    </section>
  );
};
