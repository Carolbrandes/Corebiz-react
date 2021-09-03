
import Slider from "react-slick";
import "./styles.scss"

interface Props {
  children: React.ReactNode,
  settings: object
}

export  const Carousel = (props: Props) =>  {
    return (
      <>
        <Slider {...props.settings}>
         {props.children}
        </Slider>
      </>
    ); 
}