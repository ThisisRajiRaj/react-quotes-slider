import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Quote from "./Quote";
import QuotesModel from "./QuotesModel";

class QuotesSlider extends React.Component {
  constructor(props) {
    super(props);

    if (props.interval !== undefined) {
      this.interval = props.interval;
    } else {
      this.interval = 5000;
    }

    if (props.quotesfileurl !== undefined) {
      this.quotesfileurl = props.quotesfileurl;
    } else {
      this.quotesfileurl = "./quotes.json";
    }

    let model = new QuotesModel();
    this.state = {
      quotesModel: model
    };
  }

  componentDidMount() {
    let model = new QuotesModel();
    model.parse(this.quotesfileurl).then(p => {
      this.setState({
        quotesModel: model
      });
    });
    this.setState({
      quotesModel: model
    });
  }

  render() {
    let itemList = this.state.quotesModel.quotes.map(item => /*#__PURE__*/React.createElement(Quote, {
      key: Math.random(),
      author: item.author,
      quote: item.quote
    }));
    if (itemList.length === 0) return /*#__PURE__*/React.createElement(React.Fragment, null);
    return /*#__PURE__*/React.createElement("div", {
      className: "quoteSlider"
    }, /*#__PURE__*/React.createElement(Carousel, {
      showThumbs: false,
      showStatus: false,
      autoPlay: true,
      showIndicators: false,
      infiniteLoop: true,
      interval: this.interval
    }, itemList));
  }

}

export default QuotesSlider;