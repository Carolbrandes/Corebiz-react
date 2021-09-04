import { Component } from "react";
import Slider from "react-slick";
import previous from "../../assets/images/prevArrow.svg";
import next from "../../assets/images/nextArrow.svg";
import "./styles.scss";

export class Carousel extends Component<any> {
  slider: any;
  constructor(props: any) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    return (
      <>
        <Slider ref={(c) => (this.slider = c)} {...this.props.settings}>
          {this.props.children}
        </Slider>

        {this.props.arrows && (
          <div className="setasWrapper">
            <img
              className="prevArrow"
              src={previous}
              alt="anterior"
              onClick={this.previous}
            />

            <img
              className="nextArrow"
              src={next}
              alt="próximo"
              onClick={this.next}
            />
          </div>
        )}
      </>
    );
  }
}
