import styles from "./styles.module.scss";
import { Carousel } from "../../components/Carousel";
import { Banner } from "../../components/Banner";
import banner from "../../assets/images/banner.png";
import bannerMobile from "../../assets/images/banner-mobile.png";

export const Home = () => {
  return (
    <div>
      <Carousel
        settings={{
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        }}
      >
        <Banner
          imagemDesktop={banner}
          heightDesktop="430px"
          imagemMobile={bannerMobile}
          heightMobile="300px"
        >
          <div className="container">
            <h1 className={styles.textoBanner}>
              <span>Olá, o que você está buscando?</span>
              Criar ou migrar seu <br /> e-commerce?
            </h1>
          </div>
        </Banner>

        <Banner
          imagemDesktop={banner}
          heightDesktop="430px"
          imagemMobile={bannerMobile}
          heightMobile="300px"
        >
          <div className="container">
            <h1 className={styles.textoBanner}>
              <span>Olá, o que você está buscando?</span>
              Criar ou migrar seu <br /> e-commerce?
            </h1>
          </div>
        </Banner>

        <Banner
          imagemDesktop={banner}
          heightDesktop="430px"
          imagemMobile={bannerMobile}
          heightMobile="300px"
        >
          <div className="container">
            <h1 className={styles.textoBanner}>
              <span>Olá, o que você está buscando?</span>
              Criar ou migrar seu <br /> e-commerce?
            </h1>
          </div>
        </Banner>

        <Banner
          imagemDesktop={banner}
          heightDesktop="430px"
          imagemMobile={bannerMobile}
          heightMobile="300px"
        >
          <div className="container">
            <h1 className={styles.textoBanner}>
              <span>Olá, o que você está buscando?</span>
              Criar ou migrar seu <br /> e-commerce?
            </h1>
          </div>
        </Banner>
      </Carousel>
    </div>
  );
};
