import React, { Component } from "react";
import ScoreIndicator from "./../ScoreIndicator/ScoreIndicator";
import DebtIndicator from "./../DebtIndicator/DebtIndicator";
import Arc from "./../Arc/Arc";
import calculateSize from "./../../utils/calculateSize";

class Carousel extends Component {
  state = {
    index: 0,
    size: null
  };
  componentDidMount() {
    this.setState({ size: calculateSize() });
    window.setInterval(this.changeSlide, 4000);
    window.addEventListener("resize", () =>
      this.setState({
        size: calculateSize()
      })
    );
  }
  changeSlide = () => {
    let index = this.state.index === 0 ? 1 : 0;
    this.setState({ index });
  };
  renderSlides = () => {
    if (this.state.index === 0)
      return <ScoreIndicator score={this.props.score} size={this.state.size} />;
    else return <DebtIndicator debt={this.props.debt} size={this.state.size} />;
  };
  render() {
    const { score, debt } = this.props;
    if (!score) {
      return (
        <div className="loadingIndicator">
          <p>Loading . . . .</p>
        </div>
      );
    } else
      return (
        <div
          className="carousel"
          style={{
            width: this.state.size,
            height: this.state.size
          }}
        >
          <Arc size={this.state.size} score={score} />
          {this.renderSlides()}
        </div>
      );
  }
}

export default Carousel;
