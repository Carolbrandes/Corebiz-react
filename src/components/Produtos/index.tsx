import { Carousel } from "../Carousel";
import styles from "./styles.module.scss";
import { Produto } from "../../interface";
import { ProdutoItem } from "../Produto";

interface Props {
  listaProdutos: Array<Produto>;
  titulo?: string;
}

export const Produtos = (props: Props) => {
  
  return (
    <section className="container section sectionProdutos">
      <h2 className={`titulo1 ${styles.titulo}`}>{props.titulo}</h2>

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
            <ProdutoItem produto={produto} key={index} />
          ))}
      </Carousel>
    </section>
  );
};
