import { Carousel } from "../Carousel";
import estrela from "../../assets/images/estrela.svg";
import estrelaPreenchida from "../../assets/images/estrela-preenchida.svg";
import tagOff from "../../assets/images/tag-off.svg";
import styles from "./styles.module.scss";
import { ReactNode, useContext, useEffect } from "react";
import { formatarPreco } from "../../functions";
import { Button } from "../Button";
import { AppContext } from "../../Store";
import { Produto } from "../../interface";

interface Props {
  listaProdutos: Array<Produto>;
  titulo?: string;
}

export const Produtos = (props: Props) => {
  const { listaCarrinho, setListaCarrinho } = useContext(AppContext);
  
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
      const produtoComprado = listaCarrinho.find(produtoLista => produtoLista.productId === produto.productId)

      if(produtoComprado !== undefined){
        produtoComprado.quantidade += 1
        // setListaCarrinho((listaCarrinho: Array<any>) => [...listaCarrinho, produtoComprado])
      }else{
          setListaCarrinho((listaCarrinho: Array<any>) => [...listaCarrinho, {...produto, quantidade: 1}])
      }
  };

  useEffect(() => {
    localStorage.setItem("carrinho", JSON.stringify(listaCarrinho));
  }, [listaCarrinho])

  return (
    <section className="container section sectionProdutos">
      <h2 className={styles.titulo}>{props.titulo}</h2>

      <Carousel
        arrows
        settings={{
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots: true,
              },
            },
          ],
        }}
      >
        {props.listaProdutos.length > 0 &&
          props.listaProdutos.map((produto, index) => (
            <div key={`${produto.productId}${index}`} className={styles.produto}>
              <div
                className={styles.imagemProduto}
                style={{ backgroundImage: `url(${produto.imageUrl})` }}
              >
                {produto.listPrice && (
                  <div className={styles.tag}>
                    <img src={tagOff} alt="off" />
                  </div>
                )}
              </div>

              <h4 className={styles.nome}>{produto.productName}</h4>

              <div className={styles.estrelas}>
                {renderizaEstrelas(produto.stars).map((estrela) => (
                  <span>{estrela}</span>
                ))}
              </div>

              <div>
                {produto.listPrice && (
                  <p className={styles.precoAntigo}>
                    de {formatarPreco(produto.listPrice)}
                  </p>
                )}
                <p
                  className={` ${
                    produto.listPrice ? styles.precoNovo : styles.preco
                  }`}
                >
                  Por {formatarPreco(produto.price)}
                </p>
                {produto.installments.length > 0 && (
                  <p className={styles.parcelas}>
                    ou em {produto.installments[0].quantify}x de{" "}
                    {formatarPreco(produto.installments[0].value)}
                  </p>
                )}
              </div>

              <Button
                className={styles.comprar}
                funcao={() => comprar(produto)}
              >
                Comprar
              </Button>
            </div>
          ))}
      </Carousel>
    </section>
  );
};
