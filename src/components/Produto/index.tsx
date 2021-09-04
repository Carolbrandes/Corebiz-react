import styles from "./styles.module.scss";
import { formatarPreco } from "../../functions";
import { ReactNode, useContext, useEffect, useState } from "react";
import { AppContext } from "../../Store";
import estrela from "../../assets/images/estrela.svg";
import estrelaPreenchida from "../../assets/images/estrela-preenchida.svg";
import tagOff from "../../assets/images/tag-off.svg";
import { Button } from "../Button";
import { Produto, ProdutoCarrinho } from "../../interface";

interface Props {
  produto: any;
  isCarrinho?: boolean;
  key: number;
}

export const ProdutoItem = (props: Props) => {
  const { listaCarrinho, setListaCarrinho } = useContext(AppContext);
  const [qtdProduto, setQtdProduto] = useState(props.produto.quantidade);
 
  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(listaCarrinho));
  }, [listaCarrinho]);

  const renderizaEstrelas = (numeroEstrelas: number): Array<ReactNode> => {
    const arrayEstrelas = [];
    for (let i = 1; i <= numeroEstrelas; i++) {
      arrayEstrelas.push(<img src={estrelaPreenchida} alt="#" />);
    }

    if (numeroEstrelas !== 5) {
      for (let i = 1; i <= 5 - numeroEstrelas; i++) {
        arrayEstrelas.push(<img src={estrela} alt="#" />);
      }
    }

    return arrayEstrelas;
  };

  const comprar = (produto: Produto) => {
    const produtoComprado = listaCarrinho.find(
      (produtoLista) => produtoLista.productId === produto.productId
    );

    if (produtoComprado !== undefined) {
      produtoComprado.quantidade += 1;
    } else {
      setListaCarrinho((listaCarrinho: Array<any>) => [
        ...listaCarrinho,
        { ...produto, quantidade: 1 },
      ]);
    }
  };

  const calcularSubtotal = (produto: ProdutoCarrinho) =>
    formatarPreco(produto.quantidade * produto.price);

  const diminuirQtdCarrinho = (produto: ProdutoCarrinho) => {
    const produtoSelecionado = listaCarrinho.find(
      (p) => p.productId === produto.productId
    );

    let novaLista = listaCarrinho.filter((item) => item);

    if (produtoSelecionado !== undefined) {
      produtoSelecionado.quantidade -= 1;
      setQtdProduto(produtoSelecionado.quantidade);

      if (produtoSelecionado.quantidade === 0) {
        novaLista = listaCarrinho.filter(
          (item) => item.productId !== produtoSelecionado.productId
        );
      }
      setListaCarrinho(novaLista);
    }
  };

  const aumentarQtdCarrinho = (produto: ProdutoCarrinho) => {
    const produtoSelecionado = listaCarrinho.find(
      (p) => p.productId === produto.productId
    );

    let novaLista = listaCarrinho.filter((item) => item);

    if (produtoSelecionado !== undefined) {
      produtoSelecionado.quantidade += 1;
      setQtdProduto(produtoSelecionado.quantidade);
    }

    setListaCarrinho(novaLista);
  };

  return (
    <div className={props.isCarrinho ? styles.produtoCarrinho : styles.produto}>
      <div
        className={styles.imagemProduto}
        style={{ backgroundImage: `url(${props.produto.imageUrl})` }}
      >
        {props.produto.listPrice && (
          <div className={styles.tag}>
            <img src={tagOff} alt="off" />
          </div>
        )}
      </div>

      <div className={styles.informacoesProduto}>
        <h4 className={styles.nome}>{props.produto.productName}</h4>

        <div className={styles.estrelas}>
          {renderizaEstrelas(props.produto.stars).map((estrela) => (
            <span>{estrela}</span>
          ))}
        </div>

        <div>
          {props.produto.listPrice && (
            <p className={styles.precoAntigo}>
              de {formatarPreco(props.produto.listPrice)}
            </p>
          )}
          <p
            className={` ${
              props.produto.listPrice ? styles.precoNovo : styles.preco
            }`}
          >
            Por {formatarPreco(props.produto.price)}
          </p>
          {props.produto.installments.length > 0 && (
            <p className={styles.parcelas}>
              ou em {props.produto.installments[0].quantify}x de{" "}
              {formatarPreco(props.produto.installments[0].value)}
            </p>
          )}
        </div>
      </div>

      {!props.isCarrinho ? (
        <Button
          className={styles.comprar}
          onClick={() => comprar(props.produto)}
        >
          Comprar
        </Button>
      ) : (
        <div className={styles.informacoesCarrinho}>
          <div className={styles.quantidadeProduto}>
            <button onClick={() => diminuirQtdCarrinho(props.produto)}>
              -
            </button>
            <span>{qtdProduto}</span>
            <button onClick={() => aumentarQtdCarrinho(props.produto)}>
              +
            </button>
          </div>

          <div className={styles.subtotal}>
            {calcularSubtotal(props.produto)}
          </div>
        </div>
      )}
    </div>
  );
};
